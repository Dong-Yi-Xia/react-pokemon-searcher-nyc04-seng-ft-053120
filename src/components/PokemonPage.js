import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: "cha"
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then((pokemonArr) => {
        this.setState({
          pokemons: pokemonArr
        })
      })
  }

  changeSearchTerm = (theTermThatIsBeingTyped) => {
    this.setState({
      searchTerm: theTermThatIsBeingTyped
    })
  }

  addOnePokemon = (singlePokemonFromChild) => {
    let theArrayOfPokemons = [singlePokemonFromChild, ...this.state.pokemons]
    this.setState({
      pokemons: theArrayOfPokemons
    })
  }

  render() {
    let theFilteredPokemonArray = this.state.pokemons.filter((pokemonPojo) => {
      return pokemonPojo.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          addOnePokemon={this.addOnePokemon}
        />
        <br />
        <Search 
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <br />
        <PokemonCollection 
          pokemons={theFilteredPokemonArray}
        />
      </Container>
    )
  }
}

export default PokemonPage
