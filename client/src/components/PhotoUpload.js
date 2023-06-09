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
    <div>
      <h5>Photo Upload</h5>
    <div className="photo-container">
      

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
            variant="light"
            style={{ marginRight: '5px' }}
            onClick={(e) => {
              setSelectedImage(null);
              setShowSave(false);
            }}
          >
            Remove
          </Button>
          {showSave ? (
            <Button onClick={convertImage} variant="light">
              Save
            </Button>
          ) : null}
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

    </div>
    </div>
  );
};

export default PhotoUpload;
