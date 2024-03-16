import { useState } from "react";

function List() {
    
    const [list , setList] = useState([
        "Rohit",
        "Kohli"
    ]);
    return (
      <>
        <h1>List 1:</h1>
        <ul>
            {
                list.map((element, index) =>(
                    <li key={index}>{element}</li>
                    
                ))
            }
            
        </ul>
      </>
    );
}

export default List;