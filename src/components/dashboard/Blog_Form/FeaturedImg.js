import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

export default function FeaturedImg({ onChange, value, setProgress }) {
  // get current url and show the upload image button or remove image button
  const location = useLocation();

  // use the following ref to trigger file input when someone clicks on upload image button
  const fileRef = useRef();

  // handle when someone clicks on upload image button
  const handleBtnClick = () => {
    fileRef.current.click();
  };
  // handle when value of file input changes
  const handleOnChange = (e) => {
    const file = e.target.files[0];

    setProgress(30);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    setProgress(60);
    reader.onloadend = () => {
      // creating custom object for blog form context
      onChange({
        target: {
          name: e.target.name,
          value: reader.result,
        },
      });
      setProgress(100);
    };
  };

  return (
    <div className="featuredImg">
      <h3>Featured Image</h3>
      <div className="content">
        {value === "" ? (
          <div className="image-preview">Image Preview</div>
        ) : (
          <img src={value} alt="Loading..." />
        )}
        <div>
          {location.pathname.match("/dashboard/editBlog") ? (
            <>
              <p>Recommended Image Size 800 x 400</p>
              <button onClick={() => handleBtnClick()}>Change Image</button>
            </>
          ) : (
            <>
              <p>Recommended Image Size 800 x 400</p>
              <button onClick={() => handleBtnClick()}>Upload Image</button>
            </>
          )}

          <input
            type="file"
            onChange={(e) => handleOnChange(e)}
            hidden
            name="image"
            accept="image/*"
            ref={fileRef}
          />
        </div>
      </div>
    </div>
  );
}
