import React, { useState } from "react";
import blogFormContext from "./blogFormContext";
export default function BlogState({ children }) {
  const [formValues, setFormValues] = useState({
    title: null,
    slug: null,
    category: [],
    status: null,
    content: null,
    image: null,
  });
  return (
    <blogFormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </blogFormContext.Provider>
  );
}
