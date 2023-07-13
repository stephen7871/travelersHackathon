import React, {useState, useEffect} from "react";
import {useParams, useNavigate } from "react-router-dom";

function Character(){
    let [character, setCharacter] = useState([]);
    const [id, setId] = useState();

    const navigate = useNavigate();
    const params = useParams();
    // useEffect(async () =>  {
    //     let fetchedCharacter = await fetch(`http://localhost:5000/characters/${params.id}`);
    //     fetchedCharacter.homeworld =  await fetch(`http://localhost:5000/planets/${params.id}`)
    //     fetchedCharacter.films =  await fetch(`http://localhost:5000/characters/${params.id}/films`);
    //     console.log(fetchedCharacter);
    //     setCharacter(fetchedCharacter);
        
    //     setId(params.id);
    // },  []);


    function navtoFilm(id){
        navigate(`/films/${id}`);
    } 


    function navtoPlanet(id){
        navigate(`/planets/${id}`);
    }

   


    return(
<>

    <h1 id="name"></h1>
    <div id="generalInfo">
      <p>Height: <span id="height"></span> cm</p>
      <p>Mass: <span id="mass"></span> kg</p>
      <p>Born: <span id="birth_year"></span></p>
    </div>
    <div id="planets">
      <h2>Homeworld</h2>
      <button onClick={() => navtoPlanet(1)}> Go to planet</button>
      <p><span id="homeworld"></span></p>
    </div>
    <div id="films">
      <h2>Films appeared in</h2>
      <button onClick={() => navtoFilm(1)}>go to films</button>
      <ul></ul>
    </div>
   
  
    </>
    )};

    export default Character;