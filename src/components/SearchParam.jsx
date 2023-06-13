import React from "react";
import { useState, useEffect } from "react";
import { animalData } from "../data/animals";
import Results from "./Results";
import useBreedList from "../useBreedList";
import Pet from "./Pet";

const SearchParam = () => {
  //all of my states here
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [petData, setPetData] = useState([]);
  const [breedData, loading] = useBreedList(animal);

  //all my effects here
  useEffect(() => {
    getPetList();
  }, []);

  async function getPetList() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const dataJson = await res.json();
    setPetData(dataJson.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getPetList();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          {" "}
          Choose a Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {animalData.map((data) => {
              return <option key={data}>{data}</option>;
            })}
          </select>
        </label>
        <label htmlFor="breed">
          {" "}
          Choose a Breed
          <select
            id="breed"
            name="breed"
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            disabled={breedData.length === 0}
          >
            {breedData.map((data) => {
              return <option key={data}>{data}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
        <Results petData={petData} />
      </form>
    </div>
  );
};

export default SearchParam;
