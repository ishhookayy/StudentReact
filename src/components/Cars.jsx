import React from "react";
import { useState } from "react";

class Cars extends React.Component {
  //propertises of class
  colors = ["red", "green", "blue"];
  models = ["ERTIGA", "FORD", "BMW"]
  //constructor is used to handle the state of component
  constructor() {
    super(); //call the parent class
    //const color = ['red', 'green', 'blue'];
    //const [ index , setindex] = useState(0);

    this.state = {
      index: 0,
      color: this.colors[0],
      model:this.models[0],
    };
  }

  render() {
    return (
      <>
        <h3>
          My car color is{" "}
          <span style={{ color: this.state.color }}>
            {this.state.color} {this.state.model}
          </span>
        </h3>
        <button
          style={{
            backgroundColor:
              this.colors[(this.state.index + 1) % this.colors.length],
            borderRadius: "10px",
            border: "3px solid black",
            padding: "20px",
          }}
          onClick={() => {
            this.setState((state) => ({
              index: (state.index + 1) % this.colors.length,
              color: this.colors[(state.index + 1) % this.colors.length],
              model: this.models[(state.index + 1) % this.models.length],
            }));
            console.log(state.index + 1);
          }}
        >
          Change color
        </button>
      </>
    );
  }
}

export default Cars;
