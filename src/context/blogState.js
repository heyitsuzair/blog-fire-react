import React, { useState } from "react";
import blogContext from "./blogContext";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
  setDoc,
  orderBy,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { toast } from "react-toastify";

export default function BlogState({ children }) {
  // reference to blogs collection
  const blogsRef = collection(db, "blogs");

  // active state for hero slider
  const [active, setActive] = useState(0);

  // logged in user blogs state
  const [userBlogs, setUserBlogs] = useState([]);

  // total views of all blogs of logged in user
  const [totalViews, setTotalViews] = useState(0);

  // total published blogs of all blogs of logged in user
  const [published, setPublished] = useState(0);

  // total drafted blogs of all blogs of logged in user
  const [draft, setDraft] = useState(0);

  // total pending blogs of all blogs of logged in user
  const [pending, setPending] = useState(0);

  const [blogs, setBlogs] = useState([]);

  // getting all the blogs available in database that are "Published"
  const gettingAllBlogs = async () => {
    // Create a query against the collection and fetch the documents where "status" == "published"
    const allBlogs = query(
      blogsRef,
      where("status", "==", "Published"),
      orderBy("views", "desc")
    );
    // executing query
    const allBlogsSnapshot = await getDocs(allBlogs);

    // doc.data() is never undefined for query doc snapshots
    setBlogs(
      allBlogsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const LoggedInUserBlogs = async (email) => {
    // Create a query against the collection and fetch the documents where "email" == "logged in user email"
    const blogsOfLoggedIn = query(
      blogsRef,
      where("userInfo.email", "==", email),
      orderBy("views", "desc")
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
    toast.success("Blog Deleted!");
    try {
      // deleting document from blogs collection
      await deleteDoc(doc(db, "blogs", id));
    } catch (error) {
      toast.error("Something Went Wrong!");
      return;
    }
  };

  const addBlog = async (
    cat,
    content,
    user,
    image,
    slug,
    status,
    title,
    views,
    setFormValues,
    setProgress,
    setLoading
  ) => {
    // Create a query against the collection and check whether the slug is already in database or not
    const slugCheckQuery = query(blogsRef, where("slug", "==", slug));
    // executing query
    const slugCheckSnapshot = await getDocs(slugCheckQuery);
    setProgress(70);
    if (slugCheckSnapshot.docs.length > 0) {
      setLoading(false);
      setProgress(100);
      toast.error("A Blog With This Slug Already Exists!");
      return;
    } else {
      // adding document to firebase
      await addDoc(collection(db, "blogs"), {
        category: cat,
        content: content,
        userInfo: user,
        image: image,
        slug: slug,
        status: status,
        title: title,
        views: views,
        date: Timestamp.now(),
      });
      //setting form value back to initial
      setFormValues({
        title: "",
        slug: "",
        category: [],
        status: "",
        content: "",
        image: "",
        views: 0,
      });
      toast.success("Blog Added!");
    }
    setProgress(100);
    setLoading(false);
  };

  const updateBlog = async (
    id,
    cat,
    content,
    user,
    image,
    slug,
    status,
    title,
    views,
    setProgress,
    setLoading,
    setChangeImage
  ) => {
    setDoc(doc(db, "blogs", id), {
      category: cat,
      content: content,
      userInfo: user,
      image: image,
      slug: slug,
      status: status,
      title: title,
      views: views,
      date: Timestamp.now(),
    })
      .then((res) => {
        toast.success("Blog Updated!");

        setProgress(100);
        // setting button load to false
        setLoading(false);

        setChangeImage(false);
      })
      .catch((res) => {
        toast.error("Something Went Wrong!");
        setProgress(100);
        setLoading(false);
      });
  };

  // calculating total views, published and pending blogs for stats
  const blogsCalculation = () => {
    // total views
    let count = 0;
    userBlogs.forEach((blog) => {
      count += blog.views;
      setTotalViews(count);
    });

    // total published blogs
    const published = userBlogs.filter((blog) => {
      return blog.status === "Published";
    });
    setPublished(published.length);

    // total draft blogs
    const drafts = userBlogs.filter((blog) => {
      return blog.status === "Draft";
    });
    setDraft(drafts.length);

    // total pending blogs
    const pendings = userBlogs.filter((blog) => {
      return blog.status === "Pending";
    });
    setPending(pendings.length);
  };

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
        updateBlog,
        totalViews,
        blogsCalculation,
        published,
        draft,
        pending,
        gettingAllBlogs,
      }}
    >
      {children}
    </blogContext.Provider>
  );
}
