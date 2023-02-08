import React from "react";
import PropTypes from "prop-types"

class Pokemon extends React.Component {
  render(){
    const {name, type, averageWeight, image} = this.props.pokemon
    return (
      <div className="pokemon">
        <div>
        <h2>Name: {name}</h2>
        <h3>Type: {type}</h3>
        <h3>Average Weight: 
          <br/>
          {`${averageWeight.value} ${averageWeight.measurementUnit}`}</h3>
        </div>
        <img className="img" src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.protoTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape(
    {
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }
  )
}.isRequired;

export default Pokemon