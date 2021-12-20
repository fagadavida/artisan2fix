import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [singleFile, setSingleFile] = useState("");
  const [showImage, setShowImage] = useState([]);

  const singleFileChange = (e) => {
    setSingleFile(e);
  };
  const getAllSinglFile = () => {
    axios.get("http://localhost:5000/api/getsinglefile").then((res) => {
      setShowImage(res.data);
    });
  };

  const uploadeSingleFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", singleFile);
    axios
      .post("http://localhost:5000/api/singlefile/", formData)
      .then((res) => {
        getAllSinglFile();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form encType="multipart/form-data">
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="file"
          onChange={(e) => singleFileChange(e.target.files[0])}
        />

        <button onClick={uploadeSingleFile}>Upload</button>
      </form>
      {showImage.map((item) => (
        <img
          ke={item._id}
          src={`http://localhost:5000/${item.imageurl}`}
          alt="Image"
          height="100"
        />
      ))}
    </div>
  );
};
export default User;
