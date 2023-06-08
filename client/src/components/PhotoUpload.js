import React, { useState } from "react";
import "./photoUpload.css";
import { Convert } from "mongo-image-converter";

const PhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const convertImage = async (e) => {
    try {
      const convertedImage = await Convert(selectedImage);
      if (convertImage) {
        const query = await fetch("/api/photo/", {
          method: "post",
          body: JSON.stringify({ convertedImage }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await query
          .json()
          .then(alert("Your photo has been seeded to our database🌱"));

        if (result && result.payload) {
          window.location.href = "/";
        } else {
          console.warn(result);
        }
      }
    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    <div>
      <h5>Photo Upload</h5>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <button onClick={convertImage}>Save</button>
    </div>
  );
};

export default PhotoUpload;
