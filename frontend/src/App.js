import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Character from './Character';
import Planet from './Planet';
import Film from './Film';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/characters/:id' exact Component={Character}/> 
        <Route path='/films/:id' exact Component={Film}/>
        <Route path='/planets/:id' exact Component={Planet}/>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
