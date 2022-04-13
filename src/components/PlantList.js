import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const filterSearch = plants.filter((plant) => {
    if (search === "") {
      return true
    } else {
      return plant.name.toLowerCase().includes(search.toLowerCase())
    }
  })
  
  const renderPlants = filterSearch.map((plant) => <PlantCard key={plant.id} plant={plant} />)

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
