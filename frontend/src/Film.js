import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

function Film(){
    let[film, setFilm] = useState([]);

    let navigate = useNavigate();
    let params = useParams();

    // useEffect(async () =>  {
    //     let fetchedFilm = await fetch(`http://localhost:5000/films/${params.id}`);
    //     fetchedFilm.planets = await fetch(`http://localhost:5000/films/${params.id}/planets`);
    //     fetchedFilm.characters = await fetch (`http://localhost:5000/films/${params.id}/characters`)
    //     console.log(fetchedFilm);
    //     setFilm(fetchedFilm);
    // },  []);

    function goToPlanet(id){
        navigate(`/planets/${id}`);
    }

    function goToCharacter(id){
        navigate(`/characters/${id}`);
    }


    return(<>
          <h1>film page</h1>
          

          <h1 id="title"></h1>
    <div id="generalInfo">
      <p>Producer: <span id="producer"></span></p>
      <p>Director: <span id="director"></span></p>
      <p>Release date: <span id="rel_date"></span></p>
    </div>
    <div id="characters">
      <h2>Characters in film</h2>
      <ul></ul>
      <button onClick={() => goToCharacter(1)}> Go to character</button>
    </div>
      <div id="planets">
        <h2>Planets in film</h2>
        <ul></ul>
        <button onClick={() => goToPlanet(1)}> Go to planet</button>
     </div>
          
          
          
         </> 
    );
          }
          export default Film;