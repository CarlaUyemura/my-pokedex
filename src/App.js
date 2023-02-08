import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokedex
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple71/v4/6e/06/18/6e0618b9-ab67-8c01-55c7-bd6928c3be14/source/512x512bb.jpg" alt="icon" className='icon'/>
        </h1>
        
        </header>
      <Pokedex pokemons={pokemons}/>
      <footer></footer>
    </div>
  );
}

export default App;
