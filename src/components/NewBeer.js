import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function NewBeer() {
  const [name, setName] = React.useState("")
  const [tagline, setTagline] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [firstBrewed, setFirstBrewed] = React.useState("")
  const [brewersTips, setBrewersTips] = React.useState("")
  const [attenuationLevel, setAttenuationLevel] = React.useState("")
  const [contributedBy, setContributedBy] = React.useState("")

  const navigate = useNavigate();

  const createBeer = (e) => {
    e.preventDefault();

    let createdBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation: attenuationLevel,
      contributed_by: contributedBy
    }

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", createdBeer)
      .then(() => navigate("/beers"))
      .catch((err) => console.log(err.message));
  }

  return (
  <div>
    <NavBar />
    <h1>Create a Beer</h1>

    <form onSubmit={createBeer}>
      <label>Name</label>
      <input onChange={(e) => setName(e.target.value)} value={name}/>

      <label>Tagline</label>
      <input onChange={(e) => setTagline(e.target.value)} value={tagline} />

      <label>Description</label>
      <input onChange={(e) => setDescription(e.target.value)} value={description} />

      <label>First Brewed</label>
      <input onChange={(e) => setFirstBrewed(e.target.value)} value={firstBrewed} />

      <label>Brewers Tips</label>
      <input onChange={(e) => setBrewersTips(e.target.value)} value={brewersTips} />

      <label>Attenuation Level</label>
      <input onChange={(e) => setAttenuationLevel(e.target.value)} value={attenuationLevel} />

      <label>Contributed By</label>
      <input onChange={(e) => setContributedBy(e.target.value)} value={contributedBy} />

      <button type="submit">Submit Beer</button>

    </form>
  </div>
  )
}

export default NewBeer