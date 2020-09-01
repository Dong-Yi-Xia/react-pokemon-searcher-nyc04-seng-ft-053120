import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    clicked: false
  }

  handleClick = (evt) => {
    this.setState({
      clicked: !this.state.clicked
    })

    // this.setState((prevState) => {
    //   return {
    //     clicked: !prevState.clicked
    //   }
    // })
  }

  render() {
    let {name, hp, sprites} = this.props.pokemon
    let {back, front} = sprites
    // let {name, hp, sprites: {back,front}} = this.props.pokemon
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.clicked ? back : front } />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
