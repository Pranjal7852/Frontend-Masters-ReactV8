import React from "react";
import Pet from "./Pet";

const Results = ({ petData }) => {
  return (
    <div className="search">
      {petData.length ? (
        petData.map((data) => {
          return <Pet {...data} key={data.id}></Pet>;
        })
      ) : (
        <h1>No data Found</h1>
      )}
    </div>
  );
};

export default Results;
