import React, { Component } from 'react';
import './style.css';

class Card extends Component {
  state = {
    boxShadow: "0 0 5px #ffffff"
  }; // shadow color

  render() {
    return (
      <div className="card-holder" onClick={() => {
          // flash red or green depending on whether or not it was clicked
          if (this.props.previouslyClicked) {
            this.setState({
              boxShadow: "0 0 5px #ff003b",
              border: "1px solid #ff003b"
            });
          } else {
            this.setState({
              boxShadow: "0 0 5px #24e48a",
              border: "1px solid #24e48a"
            });
          }

          setTimeout(() => {
            this.setState({boxShadow: "0 0 5px #ffffff", border: "none"});
            this.props.handleClick(this.props.image.src)
          }, 250);
        }}>
        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/${this.props.image.src}`} alt={this.props.image.name} style={this.state}/>
        <div className="img-credit">{this.props.image.credit}</div>
      </div>
    );
  }
}

export default Card;