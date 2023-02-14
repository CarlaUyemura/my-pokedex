/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types"

export function Button({ type, filterPokemon } )  {
  return (

        <button className="btn-type" title={`Type ${type}`} type="button" onClick={filterPokemon}>
          <img className="img-type"  name= {type} alt={`${type}-btn`} src={require(`./img/${type}.png`)}/>
        </button> 
  )
  }

Button.propTypes = {
  type: PropTypes.string,
  filterPokemon: PropTypes.func,
}.isRequired
