import React from "react";
import PropTypes from "prop-types"

class Pokemon extends React.Component {
  render(){
    const {name, types, weight, image, stats} = this.props.pokemon
    return (
      <div className="pokemon">
        <div className="container-name">
        <h2>{name}</h2>
        </div>
        <div className="container-status">
          {stats.map((status) => <p key={status.stat.name} className='status'>{`${status.stat.name}: ${status.base_stat}`}</p>)}
        </div>
        <img className="img" src={image} alt={name} />
        <div className="container-type">
        {types.map((e) => <h3 key={e.type.name}>{e.type.name}</h3>  )} 
        </div>
        <section className="container-bottom">
        <h3>Weight:
          {` ${Number(weight) / 10} KG`}
        </h3>
        </section>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    types: PropTypes.shape({
      map: PropTypes.func
    }),
    weight: PropTypes.Number,
    image: PropTypes.string
  })
}.isRequired

export default Pokemon