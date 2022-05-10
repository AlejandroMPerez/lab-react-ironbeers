import React from "react";
import NavBar from "./NavBar";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = React.useState({})

  React.useEffect(() => {

    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((results) => setRandomBeer(results.data))
      .catch((err) => console.log(err.message))

  }, [])
  
  return (
    <>
      <NavBar />
      <h1>Random Beer</h1>
      <div>
        <img style={{width: "auto", height: 200}} src={randomBeer.image_url} alt="beer_image"/>
        <p>{randomBeer.name}</p>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </>
  );
}

export default RandomBeer;
