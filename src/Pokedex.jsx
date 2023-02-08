import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const {pokemons} = this.props
    this.state = {
      indexPokemon: 0,
      typePokemon: 'All',
      allPokemons: pokemons
    }
  }

  nextPokemon = () => {
    const {indexPokemon, allPokemons} = this.state
    this.setState((posicaoAnterior, _prop)=> ({
      indexPokemon: indexPokemon < allPokemons.length-1 ? posicaoAnterior.indexPokemon +1 : 0
    })); 
  };

  filterPokemon = (event) => {
    const {pokemons} = this.props

    if(event.target.innerText === 'All') {
      this.setState({
        indexPokemon: 0,
        allPokemons: pokemons,
      })
    } else {
    this.setState({
      typePokemon: event.target.innerText,
      indexPokemon: 0,
      allPokemons: pokemons.filter((element) => element.type === event.target.innerText)
    })
    
    }
  }

  render(){
    const {allPokemons, indexPokemon} = this.state
    return (
        <div className="background">
          <div className="card">
            {
            allPokemons
            .map((element) => <Pokemon pokemon={element} key={element.id}/>)[indexPokemon]
            }
            </div>
            <div className="buttons">
                <button type="button" onClick={this.nextPokemon}>Próximo</button>
                <button type="button" onClick={this.filterPokemon}>All</button> 
                <button type="button" onClick={this.filterPokemon}>Electric</button> 
                <button type="button" onClick={this.filterPokemon}>Fire</button> 
                <button type="button" onClick={this.filterPokemon}>Bug</button> 
                <button type="button" onClick={this.filterPokemon}>Poison</button> 
                <button type="button" onClick={this.filterPokemon}>Psychic</button> 
                <button type="button" onClick={this.filterPokemon}>Normal</button>
                <button type="button" onClick={this.filterPokemon}>Dragon</button>
            </div>
      </div>
    )
  }
}

export default Pokedex;