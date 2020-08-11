import React, { Component } from 'react';
import './style.css';

class Jumbotron extends Component {
  render() {
    return (
      <div id="jumbotron" className="jumbotron jumbotron-fluid" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/hubble-deep-field.jpg")` }}>
        <div className="container">
          <h2 className="display-4">Welcome to the Clicky Game!</h2>
          <p className="lead">Click on images to earn points, but don't click on the same image twice!</p>
        </div>
        <div className="img-credit"> Image credit: NASA, ESA, and S. Beckwith (STScI) and the HUDF Team</div>
      </div>
    );
  }
}

export default Jumbotron;
