import React, { Component } from 'react';
import './Player.css'

class Player extends Component {
  render() {
    return(
      <div className="Player">
        <h1>{this.props.name}</h1>
        <h3>Amount: {this.props.amount}</h3>
      </div>
    )
  }
}

export default Player;