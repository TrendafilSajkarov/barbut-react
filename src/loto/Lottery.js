import React, { Component } from 'react';
import './Lottery.css';
import Ball from './Ball'; 

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  constructor(props) {
    super(props);
    this.state = {
      num: Array.from({length: this.props.numBalls})
    }
    this.hendleClick = this.hendleClick.bind(this);
  }

  hendleClick() {
    this.setState(prevState => ({
      num: prevState.num.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }))
  }

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.num.map(n => <Ball num={n}/>)}
        </div>
        <button onClick={this.hendleClick} >Generate</button>
      </div>
    )
  }
}

export default Lottery;