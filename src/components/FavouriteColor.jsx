import { useState } from "react";

function FavouriteColor(){

    const [colorIndex, setColorIndex] = useState(0);

    const color =['red','green','blue'];

    const changeColor = () =>{
        setColorIndex((prev) =>(prev + 1) % color.length);
    }
    return (
      <>
        <h3>
          My Favourite color is{" "}
          <span style={{ color: color[colorIndex] }}>{color[colorIndex]}</span>
        </h3>
        <button style={{ 
            backgroundColor: color[(colorIndex + 1) % color.length],
            borderRadius: " 10px ",
            border: " 1px solid black" ,
            padding :"12px",
            }} onClick={changeColor}>
          Change color
        </button>
      </>
    );
}

export default FavouriteColor;