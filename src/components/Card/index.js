import React, { Component } from 'react';
import './style.css';

class Card extends Component {

  render(props) {
    return (
      <div className="card-holder">
        <img className="img-fluid" src={`/img/${this.props.image.src}`} alt={this.props.image.name}/>
        <div className="img-credit">{this.props.image.credit}</div>
      </div>
    );
  }
}

export default Card;