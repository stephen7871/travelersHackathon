
const express = require("express");
const app = express()
const cors = require('cors');
const mongoose = require("mongoose");

app.listen(5000, () => console.log("Server is running"));
mongoose.connect(
    "mongodb+srv://stephenmcn787:8PL7BWtaGOHiQnYP@cluster0.oivfgyf.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewURLparser:true,
        useUnifiedTopology:true
    }
);

app.use(cors({origin: true, credentials: true, }));
   

const planetsSchema = new mongoose.Schema({
  id: Number,
  climate: String,
  surface_water: String,
  name: String,
  diameter: String,
  rotation_period:String,
  terrain: String,
  gravity: String,
  orbital_period: String,
  population: String
});

const planets = mongoose.model('planets', planetsSchema);


app.get("/planets", async (request, response) => {
  const users = await planets.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});





// planets.insertMany(json).then(function(){
//   console.log("Data inserted")  // Success
// }).catch(function(error){
//   console.log(error)      // Failure
// });


// for(let i = 0; i < json.length; i++) {
//   let obj = json[i];

//   console.log(obj.id);
// }


const filmsSchema = new mongoose.Schema({
    id: Number,
    producer: String,
    title: String,
    episode_id: Number,
    director: String,
    release_date:String,
    opening_crawl: String
});

const films = mongoose.model('films', filmsSchema);

app.get("/films", async (request, response) => {
    const users = await films.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });






  const charactersSchema = new mongoose.Schema({
    id: Number,
    name: String,
    gender: String,
    skin_color: String,
    hair_color: String,
    height:String,
    eye_color: String,
    mass: String,
    homeWorld: Number,
    birth_year: String
});

const characters = mongoose.model('characters', charactersSchema);

app.get("/characters", async (request, response) => {
    const users = await characters.find({});

    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  const router = express.Router()

  app.get("/characters/:id", async (request, response) => {
    const {id} = request.params;
    const character = await characters.findById(id);
    console.log(character);

    try {
      response.send(character);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  const films_charactersSchema = new mongoose.Schema({
    film_id: Number,
    Character_id: Number
});

const films_characters = mongoose.model('films_characters', films_charactersSchema);

app.get("/films_characters", async (request, response) => {
    const users = await films_characters.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  const films_planetsSchema = new mongoose.Schema({
    film_id: Number,
    planet_id: Number
});

const films_planets = mongoose.model('films_planets', films_planetsSchema);

app.get("/films_planets", async (request, response) => {
    const users = await films_planets.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });