import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function FeaturedImg({ onChange, value }) {
  // use the following ref to trigger file input when someone clicks on upload image button
  const fileRef = useRef();

  // handle when someone clicks on upload image button
  const handleBtnClick = () => {
    fileRef.current.click();
  };
  // handle when value of file input changes
  const handleOnChange = (e) => {
    const file = e.target.files[0];

    const k = 1024;

    const i = Math.floor(Math.log(file.size) / Math.log(k));
    const fileSize = `${parseFloat(file.size / Math.pow(k, i))}`;

    if (fileSize > 5) {
      toast.warning("Image Size Must Be Below 5 MB!");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // creating custom object for blog form context
      onChange({
        target: {
          name: e.target.name,
          value: reader.result,
        },
      });
    };
  };

  return (
    <div className="featuredImg">
      <h3>Featured Image</h3>
      <div className="content">
        {value === null ? (
          <div className="image-preview">Image Preview</div>
        ) : (
          <img src={value} alt="Loading..." />
        )}
        <div>
          <p>Image Size Must Not Be More Than 5 MB</p>
          <button onClick={() => handleBtnClick()}>Upload Image</button>
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
