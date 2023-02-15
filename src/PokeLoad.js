/* eslint-disable no-undef */
import React from "react";

export default function Loading() {
  return (
    <div className="pokemon container-pokeload">
      <h1 className="title-pokeLoad">Loading...</h1>
      <img alt="Loading" className="img-pokebola" src={ require("./img/pokebola.gif") }/>
    </div>
  )
}