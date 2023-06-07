import React, { useState } from 'react';
import './photoUpload.css';


const PhotoUpload = () => {

  const [selectedImage, setSelectedImage] = useState(null);

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

      </div>
  );
}

export default PhotoUpload