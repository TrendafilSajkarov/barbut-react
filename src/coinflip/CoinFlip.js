import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      side: 'https://tinyurl.com/react-coin-heads-jpg',
      alt: 'heads'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let rand = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails'
    this.setState(prevState => ({
      flips: prevState.flips + 1,
      side: `https://tinyurl.com/react-coin-${rand}-jpg`,
      heads: rand === 'heads' ? prevState.heads + 1 : prevState.heads,
      tails: rand === 'tails' ? prevState.tails + 1 : prevState.tails,
      alt: rand
    }))

    // if (Math.floor(Math.random() * 2) === 0) {
    //   let rand = 'tails';
    //   this.setState(prevState => ({
    //     flips: prevState.flips + 1,
    //     tails: prevState.tails + 1,
    //     side: `https://tinyurl.com/react-coin-${rand}-jpg`,
    //     alt: 'tails'
    //   }))
    // } else {
    //   let rand = 'heads';
    //   this.setState(prevState => ({
    //     flips: prevState.flips + 1,
    //     heads: prevState.heads + 1,
    //     side: `https://tinyurl.com/react-coin-${rand}-jpg`,
    //     alt: 'heads'
    //   }));
    // }
  }
  render() {
    return (
      <div>
        <div>
          <Coin imgSrc={this.state.side} alt={this.state.alt} />
        </div>
        <div>
          <button onClick={this.handleClick}>Flip Me</button>
          <p>{`Out of ${this.state.flips} flips, there have been ${this.state.heads} heads and ${this.state.tails} tails`}</p>
        </div>
      </div>
    )
  }
}

export default CoinFlip;