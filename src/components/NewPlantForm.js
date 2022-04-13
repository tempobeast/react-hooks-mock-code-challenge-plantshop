import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {

const [formData, setFormData] = useState({
  name: "",
  image: "",
  price: ""
})

function handleChange (e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

function handleSubmit(e) {
  e.preventDefault();
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then((res) => res.json())
  .then((data) => onFormSubmit(data))
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
