import Car from "./Car";
import Apple from "./Apple";
import Header from "./Header";
function Garage() {
  //const brand = "Ertiga";
  //const color = "Red";
  /*
  const carInfo ={
    brand: "Ferrari",
    color: "Green"
  };*/
  const carList = [
    { brand: "BMW", color: "Yellow" },
    { brand: "Tata", color: "Pink" },
    { brand: "Tesla", color: "Green" },
  ];

  const carInfo = {
    brand: "Ferrai",
    color: "Blue",
  };
  const appleInfo = {
    type: "Normal",
    color: "pich",
  };
  const isOpen = true;
  return (
    <>
      <h1 className="text-red-500">Who lives inside my garage?</h1>
      {/*<Car brand={brand} color={color}/>*/}
      {carInfo.brand != undefined && carInfo.color != undefined ? (
        <Car carInfo={carInfo} />
      ) : null}

      <Apple appleInfo={appleInfo} />
      {isOpen ? <h2>Garage door is opened</h2> : <h2>Garage door is closed</h2>}

      <ul>
        {carList.map((car,index) => (
          <li key={index}><Car carInfo={car}/></li>
        ))}
      </ul>
      <Header/>
    </>
  );
}
export default Garage;
