import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Grid from './components/Grid';
import Footer from './components/Footer';
import shuffle from './utils/shuffle';

class App extends Component {
  state = {
    images: shuffle(require('./images.json')),
    score: 0,
    topScore: 0,
  }

  shuffleImages = () => {
    this.setState(state => {
      return {...state, images: shuffle(state.images)};
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Grid images={this.state.images} shuffleImages={this.shuffleImages} />
        <Footer />
      </div>
    );
  }
}

export default App;
