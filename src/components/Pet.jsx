import React from "react";
import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  // Default image handler
  let deafultImage = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    deafultImage = images[0];
  }

  return (
    <>
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={deafultImage} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </Link>
    </>
  );
};

export default Pet;
