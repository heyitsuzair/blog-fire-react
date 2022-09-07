import React, { useContext, useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import { Facebook } from "@mui/icons-material";
import { db } from "../../firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import userContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
export default function LoginFb() {
  const user_context = useContext(userContext);

  const { setUser, user } = user_context;

  // navigate after successfull login or navigate if user is already loggedin
  const navigate = useNavigate();

  const responseFacebook = async (response) => {
    const docRef = doc(db, "users", response.email);
    const docSnap = await getDoc(docRef);

    if (docSnap._document === null) {
      // Add a new document in collection "users"
      await setDoc(doc(db, "users", response.email), {
        name: response.name,
        email: response.email,
        method: "fb",
        pic: response.picture.data.url,
      });
      navigate("/");
    } else {
      localStorage.setItem("blog-user", JSON.stringify(docSnap.data()));
      setUser(docSnap.data());
      navigate("/");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("blog-user") !== null || user !== null) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="login-with-fb"
      icon={<Facebook />}
    />
  );
}
