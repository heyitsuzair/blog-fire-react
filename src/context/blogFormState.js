import React, { useState } from "react";
import blogFormContext from "./blogFormContext";
export default function BlogState({ children }) {
  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    category: [],
    status: "",
    content: "",
    image: "",
    views: 0,
  });
  return (
    <blogFormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </blogFormContext.Provider>
  );
}
