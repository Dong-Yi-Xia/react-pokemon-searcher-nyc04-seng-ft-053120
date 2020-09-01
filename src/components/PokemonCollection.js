import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  returnsAnArrayOfComponents = () => {
    // MAKE SURE THAT WHEN YOU ARE INVOKING A METHOD IN THE RETURN OF RENDER,
    // THAT METHOD RETURNS SOMETHING
    return this.props.pokemons.map((pokemonPOJO) => {
      return <PokemonCard />
    })
  }

  render() {
    // [{}] -> [</html>]
    let arrayOfComponents = this.props.pokemons.map((pokemonPOJO, idx) => {
      return <PokemonCard 
        key={pokemonPOJO.id} 
        pokemon={pokemonPOJO} 
      />
    })

    return (
      <Card.Group itemsPerRow={5}>
        {
          arrayOfComponents
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
