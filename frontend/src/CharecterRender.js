import axios from 'axios';
import {useEffect,useState} from 'react'


function CharecterRender() {
    

return(<body>
    <link rel="stylesheet" href="site.css"></link>
    <div>
      <h1>Star Wars Universe Lookup</h1>
      <label for="searchString">Who you looking for? <span class="small">(Regular expressions are cool
          here)</span></label>
          <input id="searchString"  autocomplete="off" />
      {/* <input id="searchString" oninput="filterCharacters()" autocomplete="off" /> */}
    </div>
    <section id="charactersList">
    </section>
  </body>);

      }
    
    export default CharecterRender;

//   return(<>
//     {characters.map(function(character) {
     
//        return(
      
//           <div key={character.id} >
//         {character.id}</div>
//        )
//     })}
//     </>
//   );
// };
     
  