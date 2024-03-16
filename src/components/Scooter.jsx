import { useState } from 'react';
import './Header.css'

/* function Scooter(){

     
  const obj = [
    {
      color: "red",
      brand: "Honda",
      model: "Activa 6G",
      year: "2020",
    },
    {
      color: "green",
      brand: "TVS",
      model: "WEGO",
      year: "2018",
    },
  ];

  const [scooterIndex, setScooterIndex] = useState(0);
  return (
    <div
      style={{
        color: scooter.color,
      }}
    >
      <h1>My Scooter</h1>
      <p>Color: {scooter.color}</p>
      <p>Brand: {scooter.brand}</p>
      <p>Model: {scooter.model}</p>
      <p>Year: {scooter.year}</p>
      <button
        onClick={() => setScooterIndex((prev) => (prev + 1) % obj.length)}
      >
        UPDATE
      </button>
    </div>
  );
} */

function Scooter(){

    const [scooter, setScooter] = useState({
      color: "red",
      brand: "Honda",
      model: "Activa 6G",
      year: "2020",
    });
    function updateColor(){
        setScooter((previousState) => {
            return { ...previousState , color:"green"};
        })
    }
    return (
      <div
        style={{
          color: scooter.color,
        }}
      >
        <h1>My Scooter</h1>
        <p>Color: {scooter.color}</p>
        <p>Brand: {scooter.brand}</p>
        <p>Model: {scooter.model}</p>
        <p>Year: {scooter.year}</p>
        <button
          onClick={updateColor}
        >
          UPDATE
        </button>
      </div>
    );
}
export default Scooter;