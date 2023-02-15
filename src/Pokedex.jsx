/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Pokemon from "./Pokemon";
import { requestGet } from './utils/reqApi';
import {Button} from "./Button";
import Loading from './Loading';

 const PokedexApi = require('pokedex')
class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      indexPokemon: 0,
      typePokemon: 'All',
      allPokemons: [],
      arrayTypes: [
"electric",
"bug" ,
"dragon",
"fairy",
"fighting",
"fire",
"flying",
"ghost",
"grass",
"ground", 
"ice",
"normal",
"steel",
"psychic",
"rock",
"water",
      ]
    }
  }

  getPokemons = async () => {
    const pokedex = new PokedexApi();
    let allPokemons = [];
   for (let index = 1; index <= 151; index++) {
    const element = await requestGet(`pokemon/${index}`);
    element['image'] = pokedex.pokemon(index).sprites.animated;
    allPokemons.push(element);
  } 
  this.setState({
    allPokemons,
  })
  this.setState({
    loading: false,
  })
  return allPokemons;    
  }

  componentDidMount() {
    this.getPokemons();

  }

  nextPokemon = () => {
    const { indexPokemon, allPokemons } = this.state
    this.setState((posicaoAnterior, _prop)=> ({
      indexPokemon: indexPokemon < allPokemons.length-1 ? posicaoAnterior.indexPokemon +1 : 0
    })); 
  };

  prevPokemon = () => {
    const { indexPokemon, allPokemons } = this.state
    this.setState((posicaoAnterior, _prop)=> ({
      indexPokemon: indexPokemon > 0 ? posicaoAnterior.indexPokemon -1 : allPokemons.length-1
    })); 
  };

  filterPokemon = async (event) => {
    const pokemons = await this.getPokemons();
    if(event.target.name === 'all') {
      this.setState({
        indexPokemon: 0,
        allPokemons: pokemons,
      })
    } else {
      const filter = pokemons.filter((element) =>  {
       if (element.types.length > 1) {
       return element.types[0].type.name === event.target.name || element.types[1].type.name === event.target.name;
     } else {
       return element.types[0].type.name === event.target.name 
     }
    })

    this.setState({
      typePokemon: event.target.name,
      indexPokemon: 0,
      allPokemons: filter,
      }) 

  }
}

  render(){
    const {allPokemons, indexPokemon, arrayTypes, loading} = this.state
    return (
          loading ? <Loading/> :
          <div className="background">
          <div className="card">
            {
            allPokemons
            .map((element) => <Pokemon pokemon={element} key={element.id}/>)[indexPokemon]
            }
            </div>
            <div className="buttons">
              
                <button type="button" title="All Pokemons" className="btn-type" name= "all" onClick={this.filterPokemon}>
                <img className="img-type"  name= "all" alt="All-Btn" src={require("./img/pokebola.png")}/>
                  </button> 

              {
                arrayTypes.map((e) =>  <Button key={e} type={e} filterPokemon={this.filterPokemon}/>)
              }
                <div className="constainer-btn-next">
                  <button type="button" title="Previous Pokemons" className="btn-type" name= "Previous" onClick={this.prevPokemon}>
                      <img className="img-type"  name= "Previous" alt="Previous-Btn" src={require("./img/btn-prev.png")}/>
                  </button> 
                      
                      <button type="button" title="Next Pokemons" className="btn-type" name= "Next" onClick={this.nextPokemon}>
                      <img className="img-type"  name= "Next" alt="Next-Btn" src={require("./img/btn-next.png")}/>
                        </button> 
                </div>
                <div className="container-my-btn">
                  <button type="button" title="My github" className="btn-type">
                    <a href="https://github.com/CarlaUyemura" target="_blank" rel="noreferrer">
                    <img alt='Github-btn' src={require("./img/github.png")} className="img-type btn-git"/>
                    </a>
                  </button>
                  <button type="button" title="My linkedin" className="btn-type">
                    <a href="https://www.linkedin.com/in/carla-uyemura/" target="_blank" rel="noreferrer">
                    <img alt='linkedin-btn' src={require("./img/linkedin.png")} className="img-type"/>
                    </a>
                  </button>
                </div>
            </div>
      </div>
    )
  }
}

export default Pokedex;