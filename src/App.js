import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Grid from './components/Grid';
import Footer from './components/Footer';
import shuffle from './utils/shuffle';

const imageData = require('./images.json');

class App extends Component {
  state = {
    images: shuffle(imageData),
    score: 0,
    topScore: 0,
    // wasClicked is an object with keys of image names and values starting out as false
    wasClicked: imageData.reduce((obj, image) => ({ ...obj, [image.src]: false}), {})
  }

  shuffleImages = () => {
    this.setState(state => {
      return {...state, images: shuffle(state.images)};
    });
  }

  handleClick = imageSrc => {
    console.log(imageSrc + " was clicked!");
    this.shuffleImages();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Grid images={this.state.images} handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
