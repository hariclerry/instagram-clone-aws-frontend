import React, { useState } from "react";
import UploadForm from '../form/form'

const UploadImage = () => {
  const [value, setValue] = useState("");
  const [file, setFile] = useState('');

  const handleOnchange = (event) => {
    console.log("eveennnt", event.target);
    const { value } = event.target;

    setValue(value);
  };

  const handleFileChange = (event) => {
    console.log("filllees", event.target);
    const files = event.target.files;
    if (!files) return;

    setFile(files[0]);
  };

  return (
    <div>
      {/* <progress value="" max="100" />*/}
   {  /* <input
        value={value}
        type="text"
        placeholder="Enter a caption...."
        onChange={(event) => handleOnchange(event)}
      />
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        placeholder="Image to upload"
        multiple={false}
      />
   <button>Upload</button> */}
      <UploadForm />
    </div>
  );
};

export default UploadImage;
