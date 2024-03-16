function Car(props) {

    const {carInfo} = props
    const { brand , color} = carInfo;
    const text = `Hi! I'm a ${color} ${brand} car`;

  return <h2 className="text-lime-700">{text}</h2>;
}

export default Car;