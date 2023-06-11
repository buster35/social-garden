import React, { useEffect, useState } from "react";
import "./photoGallery.css";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const resp = await fetch(`/api/photo/`);
      const result = await resp.json();
      console.log(result); //working
      if (result.status === "success") {
        setPhotos(result.photos);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <h5>PhotoGallery</h5>
    <div className="gallery-container">
          <br></br>
      {photos && photos.length > 0 ? (
        photos.map((photo) => (
          <img className="gallery-styling" key={photo._id} src={photo.photo} alt="Photo"  width={"80%"} />
        ))
      ) : (
        <p>No Photos To Display</p>
      )}
    </div>
    </div>
  );
}
