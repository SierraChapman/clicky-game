import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Grid from './components/Grid';
import Footer from './components/Footer';

class App extends Component {
  state = {
    images: require('./images.json'),
    score: 0,
    topScore: 0,
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Grid images={this.state.images} />
        <Footer />
      </div>
    );
  }
}

export default App;
