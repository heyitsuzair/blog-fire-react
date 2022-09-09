import React, { useState } from "react";
import blogContext from "./blogContext";
import image from "../assets/img/thumbnail-01.webp";
import image2 from "../assets/img/thumbnail-02.webp";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase-config";

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
    // Create a query against the collection.
    const blogsIncoming = query(blogsRef, where("email", "==", getUser.email));
    // executing query
    const blogsSnapshot = await getDocs(blogsIncoming);

    // doc.data() is never undefined for query doc snapshots
    setUserBlogs(
      blogsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  return (
    <blogContext.Provider
      value={{ blogs, active, setActive, LoggedInUserBlogs, userBlogs }}
    >
      {children}
    </blogContext.Provider>
  );
}
