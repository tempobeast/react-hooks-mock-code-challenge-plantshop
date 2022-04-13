import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data))
  }, [])

  function handleNewPlant(newPlant) {
    setPlants(newPlant)
  }

  function handleSearch(plant) {
    setSearch(plant)
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={handleNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
