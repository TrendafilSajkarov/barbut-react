import React, { Component } from 'react';
import Die from './Die';
import Player from "./Player";
import './Rolldice.css'

class Rolldice extends Component {
  static defaultProps = {
    nameP1: 'Player 1',
    nameP2: 'Player 2',
    amount: 100
  }
  constructor(props) {
    super(props);
    this.state = {
      die1: 'six',
      die2: 'six',
      rolling: false,
      winner: false,
      loser: false
    }
    this.hendleRollDice = this.hendleRollDice.bind(this);
  }
  hendleRollDice() {
    this.setState({ rolling: true, winner: false, loser: false });
    setTimeout(() => {
      const faces = ['one', 'two', 'three', 'four', 'five', 'six'];
      let randFace1 = faces[Math.floor(Math.random() * faces.length)];
      let randFace2 = faces[Math.floor(Math.random() * faces.length)];
      let winner = false;
      let loser = false;
      if ((randFace1 === 'five' || randFace1 === 'six') && (randFace2 === 'five' || randFace2 === 'six')) {
        winner = true;
      } else if (randFace1 === 'three' && randFace2 === 'three') {
        winner = true;
      }
      if ((randFace1 === 'one' || randFace1 === 'two') && (randFace2 === 'two' || randFace2 === 'one')) {
        loser = true;
      } else if (randFace1 === 'four' && randFace2 === 'four') {
        loser = true;
      }
      this.setState({
        die1: randFace1,
        die2: randFace2,
        rolling: false,
        winner: winner,
        loser: loser
      });
    }, 1000);
  }
  render() {
    return (
      <div className="Rolldice">
        {this.state.winner ? 'You WON' : this.state.loser ? 'You LOSE' : 'Play Barbut'}
        <div className="Rolldice-container">
          <Die
            face={this.state.die1}
            loser={this.state.loser}
            winner={this.state.winner}
            rolling={this.state.rolling}
          />
          <Die
            face={this.state.die2}
            loser={this.state.loser}
            winner={this.state.winner}
            rolling={this.state.rolling}
          />
        </div>
        <button
          disabled={this.state.rolling}
          onClick={this.hendleRollDice}
        >
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
        <div className="Rolldice-player">
          <Player name={this.props.nameP1} amount={this.props.amount}/>
          <Player name={this.props.nameP2} amount={this.props.amount}/>
        </div>
      </div>
    )
  }
}

export default Rolldice;