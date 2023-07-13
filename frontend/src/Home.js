import axios from 'axios';
import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
    const [characters, setCharcters] = useState([]);
    const [matchingCharacters, setMatchingCharacters] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => navigate('/characters', )
    
    useEffect(() => {
      axios
        .get('http://localhost:5000/characters')
        .then((res) => {
          setCharcters(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log('Error from ShowBookList');
        });
    }, []);

    const gotoCharacters = (id)  =>{
      navigate(`/characters/${id}`);
    }
    
    


return(<body>
    <link rel="stylesheet" href="site.css"></link>
    <div>
      <h1>Star Wars Universe Lookup</h1>
      <label for="searchString">Who you looking for? <span class="small">(Regular expressions are cool
          here)</span></label>
          <input id="searchString"   autocomplete="off" />
      {/* <input id="searchString" oninput="filterCharacters()" autocomplete="off" /> */}
    </div>
    
    <section id="charactersList">
        {characters.map(function(character){
                return <li key={character.id} onClick={() => gotoCharacters(character.id)}>{character.name}</li>
        })
    }
            
    </section>
  </body>);

      }
    
    export default Home;



  