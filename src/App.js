import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Grid />
      </div>
    );
  }
}

export default App;
