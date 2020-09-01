import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state={
    name: "",
    hp: "", 
    frontUrl: "",
    backUrl: ""
  }

  handleAllInputs = (evt) => {
    // As long as the name of your inputs match the keys of your state
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  
  handleSubmit = (evt) => {
    evt.preventDefault()

    let theObjectStructuredTheSameWayAsBackEnd = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(theObjectStructuredTheSameWayAsBackEnd)
    })
      .then(res => res.json())
      .then((newlyCreatedPokemon) => {
        this.props.addOnePokemon(newlyCreatedPokemon)
      })


  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" 
            value={this.state.name} onChange={this.handleAllInputs} 
            />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" 
            value={this.state.hp} onChange={this.handleAllInputs}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" 
            value={this.state.frontUrl} onChange={this.handleAllInputs}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" 
            value={this.state.backUrl} onChange={this.handleAllInputs}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
