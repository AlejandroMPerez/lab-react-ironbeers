import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerId() {
  const [indivBeer, setIndivBeer] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
    //   .then((results) => console.log("CONSOLE", results))
      .then((results) => setIndivBeer(results.data))
      .catch((err) => console.log(err.message))
  }, []);

  const params = useParams()

  return (
      <div>
          <h1>Beer Details</h1>
          <img style={{width: "auto", height: 200}} src={indivBeer.image_url} alt="beer_image"/>
          <p>{indivBeer.tagline}</p>
          <p>{indivBeer.first_brewed}</p>
          <p>{indivBeer.attenuation_level}</p>
          <p>{indivBeer.description}</p>
          <p>{indivBeer.contributed_by}</p>
      </div>
  )
}

export default BeerId;
