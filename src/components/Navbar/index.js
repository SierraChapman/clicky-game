import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <header className="container-fluid fixed-top ">
        <div className="row">
          <div className="col-12"><h1 className="mt-2">Clicky Game</h1></div>
          <div className="col-12"><p className="mb-1">with images from</p></div>
          <div className="col-12"><p id="hst"><strong>HUBBLE</strong> SPACE TELESCOPE</p></div>
          <div className="col-12"><p>Score: 0 | Top Score: 12</p></div>
        </div>
      </header>
    );
  }
}

export default Navbar;
