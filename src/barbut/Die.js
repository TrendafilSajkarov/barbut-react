import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i className={
          `fas fa-dice-${this.props.face} 
          ${this.props.loser&&'shine-lose'}
          ${this.props.winner&&'shine-win'} 
          ${this.props.rolling&&'rolling'}`
        }></i>
      </div>
    )
  }
}

export default Die;