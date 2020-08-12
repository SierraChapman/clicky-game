import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Grid from './components/Grid';
import Footer from './components/Footer';
import shuffle from './utils/shuffle';

const imageData = require('./images.json');
// save initial state for wasClicked to make it easy to reset it
// wasClicked is an object with keys of image names and values starting out as false
const wasClickedStarter = imageData.reduce((obj, image) => ({ ...obj, [image.src]: false}), {});

class App extends Component {
  state = {
    images: shuffle(imageData),
    score: 0,
    topScore: 0,
    wasClicked: wasClickedStarter
  }

  shuffleImages = () => {
    this.setState(state => {
      return {...state, images: shuffle(state.images)};
    });
  }

  handleClick = imageSrc => {
    // if the image was previously clicked, it's a bad click!
    if (this.state.wasClicked[imageSrc]) {
      this.handleBadClick();
    } else {
      this.handleGoodClick(imageSrc);
    }
  }

  handleGoodClick = imageSrc => {
    // shuffle, increase score, possibly increase high score and mark as clicked
    this.setState(state => {
      return {
        images: shuffle(state.images),
        score: state.score + 1,
        topScore: (state.score + 1 > state.topScore) ? state.score + 1 : state.topScore,
        wasClicked: {...state.wasClicked, [imageSrc]: true}
      };
    });
  }

  handleBadClick = () => {
    // shuffle, reset score, and reset wasClicked
    this.setState(state => {
      return {
        images: shuffle(state.images),
        score: 0,
        topScore: state.topScore,
        wasClicked: wasClickedStarter
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Grid images={this.state.images} handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
