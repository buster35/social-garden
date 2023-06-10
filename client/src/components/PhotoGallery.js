import React, {useEffect, useState} from 'react'


export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    try {
      const resp = await fetch(`/api/photo`);
      const result = await resp.json();
     if (result.status === "success") {
      setPhotos(result.payload);
     }
    } catch (err) {
      console.log(err.message)
    }
  };
  useEffect (() => {
    getPhotos();
  }, []);
  return (
    <div>
      <h3>PhotoGallery</h3>
      {photos && photos.length > 0 ? (
        photos.map((photo) => (
        <img key={photo._id} src={photo.photo} alt="Photo" />
      ))
      ) : (
        <p>No Photos To Display</p>
      )}
    </div>
  )
}
