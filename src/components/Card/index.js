import React, { Component } from 'react';
import './style.css';

class Card extends Component {

  render() {
    return (
      <div className="card-holder" onClick={this.props.shuffleImages}>
        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/${this.props.image.src}`} alt={this.props.image.name}/>
        <div className="img-credit">{this.props.image.credit}</div>
      </div>
    );
  }
}

export default Card;