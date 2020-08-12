import React, { Component } from 'react';
import Card from '../Card';
import './style.css';

class Grid extends Component {

  render() {
    return (
      <div className="container">
        <div className="row" style={{marginTop: -15, marginBottom: 15}}>
          {this.props.images.map(image => {
            return (
              <div className="col-6 col-sm-4 col-md-3" style={{marginTop: 15, marginBottom: 15}} key={image.src} >
                <Card image={image} shuffleImages={this.props.shuffleImages} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Grid;