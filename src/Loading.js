/* eslint-disable no-undef */
import React from "react";

export default function Loading() {
  return (
    <main className="container-loading">
      <h1 className="title-loading">Loading...</h1>
      <img alt="Loading" className="img-pok" src={ require("./img/loadPoke4.gif") }/>
    </main>
  )
}