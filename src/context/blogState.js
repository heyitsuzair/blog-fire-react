import React, { useState } from "react";
import blogContext from "./blogContext";
import image from "../assets/img/thumbnail-01.webp";
import image2 from "../assets/img/thumbnail-02.webp";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { toast } from "react-toastify";
import { addDoc } from "firebase/firestore";

export default function BlogState({ children }) {
  // reference to blogs collection
  const blogsRef = collection(db, "blogs");

  // logged in user info
  const getUser = JSON.parse(localStorage.getItem("blog-user"));

  // active state for hero slider
  const [active, setActive] = useState(0);

  // logged in user blogs state
  const [userBlogs, setUserBlogs] = useState([]);

  const [blogs, setBlogs] = useState([
    {
      category: "Designs",
      title: "Hello",
      img: image,
      desc: "I am Uzair A Senior Developer having experience in web development industry for 3 years",
      by: "UZAIR",
    },
    {
      category: "Sports",
      title: "Sports",
      img: image2,
      desc: "I am Uzair A Senior Developer having experience in web development industry for 3 years",
      by: "Sports",
    },
  ]);

  const LoggedInUserBlogs = async () => {
    // Create a query against the collection and fetch the documents where "email" == "logged in user email"
    const blogsOfLoggedIn = query(
      blogsRef,
      where("email", "==", doc(db, `users/` + getUser.email))
    );
    // executing query
    const blogsSnapshot = await getDocs(blogsOfLoggedIn);

    // doc.data() is never undefined for query doc snapshots
    setUserBlogs(
      blogsSnapshot.docs.map((doc, index) => ({
        ...doc.data(),
        id: doc.id,
        index: index + 1,
      }))
    );
  };

  const deleteBlog = async (id) => {
    // filtering blog that is deleted
    const filteredBlogs = userBlogs.filter((blog) => {
      return blog.id !== id;
    });
    // settings new blogs after deleting one blog
    setUserBlogs(filteredBlogs);
    try {
      // deleting document from blogs collection
      await deleteDoc(doc(db, "blogs", id));
      toast.success("Blog Deleted!");
    } catch (error) {
      toast.error("Something Went Wrong!");
      return;
    }
  };

  const addBlog = async (
    cat,
    content,
    email,
    image,
    slug,
    status,
    title,
    setFormValues
  ) => {
    // Create a query against the collection and check whether the slug is already in database or not
    const slugCheckQuery = query(blogsRef, where("slug", "==", slug));
    // executing query
    const slugCheckSnapshot = await getDocs(slugCheckQuery);
    console.log(slugCheckSnapshot.docs);
    if (slugCheckSnapshot.docs.length > 0) {
      toast.error("A Blog With This Slug Already Exists!");
      return;
    } else {
      // adding document to firebase
      await addDoc(collection(db, "blogs"), {
        category: cat,
        content: content,
        email: doc(db, `users/` + email),
        image: image,
        slug: slug,
        status: status,
        title: title,
        views: parseInt(0),
      });
      //setting form value back to initial
      setFormValues({
        title: "",
        slug: "",
        category: [],
        status: "",
        content: "",
        image: "",
      });
      toast.success("Blog Added!");
      return false;
    }
  };

  const updateBlog = async (
    cat,
    content,
    email,
    image,
    slug,
    status,
    title
  ) => {};

  return (
    <blogContext.Provider
      value={{
        blogs,
        active,
        setActive,
        LoggedInUserBlogs,
        userBlogs,
        deleteBlog,
        addBlog,
      }}
    >
      {children}
    </blogContext.Provider>
  );
}
