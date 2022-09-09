import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogForm from "../components/dashboard/Blog_Form/BlogForm";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";
import userContext from "../context/userContext";
import blogFormContext from "../context/blogFormContext";
import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
export default function EditBlog({ setProgress }) {
  const navigate = useNavigate();
  // check whether user is logged in or not
  const user_context = useContext(userContext);
  const { user } = user_context;
  const getUser = localStorage.getItem("blog-user");
  // incoming id
  const { id } = useParams();
  // form values context
  const form_context = useContext(blogFormContext);
  const { setFormValues } = form_context;

  // finding the incoming id document and setting the values to form
  const setValues = async (id) => {
    setProgress(0);
    setProgress(30);
    const docRef = doc(db, "blogs", id);
    setProgress(50);
    const docSnap = await getDoc(docRef);
    setProgress(70);
    if (docSnap.exists()) {
      const incomingData = docSnap.data();
      // setting form values of incoming data of blog
      setFormValues({
        title: incomingData.title,
        slug: incomingData.slug,
        category: incomingData.category,
        status: incomingData.status,
        content: incomingData.content,
        image: incomingData.image,
      });
    } else {
      toast.error("Something Went Wrong!");
    }
    setProgress(100);
  };

  useEffect(() => {
    //check if user is logged in or not and if the user is not logged in, navigate it to index
    if (getUser === null && user === null) {
      navigate("/");
      return;
    }
    setValues(id);
    //eslint-disable-next-line
  }, [id]);

  return (
    <div className="add-blog">
      <BreadCrumb text="Edit Blog" />
      {getUser === null ? "" : <BlogForm setProgress={setProgress} />}
    </div>
  );
}
