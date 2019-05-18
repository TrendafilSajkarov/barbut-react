import React, {Component} from 'react';
import './Coin.css';

class Coin extends Component {
  render() {
    return (
      <img className="img" src={this.props.imgSrc} alt={this.props.alt}/>      
    )
  }
}

export default Coin;