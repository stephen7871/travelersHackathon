import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

function Planet(){
    let[planet, setPlanet] = useState([]);

    let navigate = useNavigate();
    let params = useParams();
    
    // useEffect(async() =>{ let fetchedPlanet = await fetch(`http://localhost:5000/planets/${params.id}`);
    // fetchedPlanet.films = await fetch(`http://localhost:5000/planets/${params.id}/planets`)
    // fetchedPlanet.characters = await fetch(`http://localhost:5000/characters/${params.id}`);
    // console.log(fetchedPlanet);
    // setPlanet(fetchedPlanet);}, []);

    function gotoFilm(id){
        navigate(`/films/${id}`);
    }

    function gotoCharacter(id){
        navigate(`/characters/${id}`);
    }

    return (
<>    <h1 id="name"></h1>
    <section id="generalInfo">
        <p>climate: <span id="climate"></span> </p>
        <p>surface_Water: <span id="surfaceWater"></span></p>
     
      </section>
    
    <section id="characters">
      <h2>People</h2>
      <button onClick={() => gotoCharacter(1)}> Go to character</button>
      <ul></ul>
    </section>
    <section id="films">
      <h2>Films appeared in</h2>
      <button onClick={() => gotoFilm(1)}>go to films</button>
      
      <ul></ul>
    </section>
</>
)};

export default Planet;