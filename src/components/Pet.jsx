import React from "react";

const Pet = (prams) => {
  return (
    <>
      <br></br>
      <div>{prams.name} </div>
      <div> {prams.breed}</div>
      <div>{prams.location} </div>
      <br></br>
    </>
  );
};

export default Pet;
