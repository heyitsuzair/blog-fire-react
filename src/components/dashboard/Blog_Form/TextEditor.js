import React, { useRef } from "react";
import JoditEditor from "jodit-react";

export default function TextEditor({ label, onChange, value }) {
  const editor = useRef(null);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => {
        // making object to send to form blog context
        onChange({
          target: {
            name: label.toLowerCase(),
            value: newContent,
          },
        });
      }} // preferred to use only this option to update the content
    />
  );
}
