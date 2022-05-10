import axios from "axios";
import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Beers() {
  const [beerAPI, setBeerAPI] = React.useState([])

  React.useEffect(() => {

    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((results) => setBeerAPI(results.data))
      .catch((err) => console.log(err.message));
  }, [])


  return (
    <>
      <NavBar />
      <h1>All Beers</h1>
      {beerAPI.map((eachBeer) => {
        return (
          <div>
            <img style={{width: "auto", height: 200}} src={eachBeer.image_url} alt="beer_image"/>
            <h3>{eachBeer.name}</h3>
            <p>{eachBeer.tagline}</p>
            <p>created by: {eachBeer.contributed_by}</p>
            <Link to={`/beers/${eachBeer._id}`}>See Details</Link>
          </div>
        )
      })}
    </>
  )
}

export default Beers