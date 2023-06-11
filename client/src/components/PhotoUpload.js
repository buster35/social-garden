import React, { useState } from "react";
import "./photoUpload.css";
import { Convert } from "mongo-image-converter";
import Button from "react-bootstrap/Button";

const PhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSave, setShowSave] = useState(false);

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
    <div className="photo-container">
      <h5>Photo Upload</h5>

      {selectedImage && (
        <div>
          <img
            className="photo"
            alt="not found"
            width={"80%"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <Button
            onClick={(e) => {
              setSelectedImage(null);
              setShowSave(false);
            }}
            variant="light"
          >
            Remove
          </Button>
        </div>
      )}

      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          setShowSave(true);
        }}
      />
      {showSave ? (
        <Button onClick={convertImage} variant="light">
          Save
        </Button>
      ) : null}
    </div>
  );
};

export default PhotoUpload;
