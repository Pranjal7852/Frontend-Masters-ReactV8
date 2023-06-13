import React from "react";
import Pet from "./Pet";

const Results = (props) => {
  return (
    <div className="search">
      {props.petData ? (
        props.petData.map((data) => {
          return (
            <Pet
              name={data.name}
              breed={data.breed}
              location={data.city}
              key={data.id}
            ></Pet>
          );
        })
      ) : (
        <h1>No data Found</h1>
      )}
    </div>
  );
};

export default Results;
