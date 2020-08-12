# Clicky Game

![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The Clicky Game is a React application where users score points by clicking images they haven't clicked before and have to start over if they click the same image twice. The image locations shuffle after every click. The score, image data, image order, and clicked status are kept track of in a state variable for the App compontent. This information, and the functions to change it, are passed to children as props.

## Table of Contents

* [Installation](#installation)

* [Demonstration](#demonstration)

* [Code Explanation](#code-explanation)

* [Technologies Used](#technologies-used)

* [Deployed Link](#deployed-link)

* [License](#license)

* [Tests](#tests)

* [Acknowledgements](#acknowledgements)

* [Questions](#questions)

## Installation

After downloading this repository, run the following command inside the repository to install the necessary dependencies:

```
npm install
```

To run the app locally on a development server, run:

```
npm start
```

## Demonstration

![Demonstration of application](demo.gif)

## Code Explanation

The `increaseScore` function is called when the user clicks on an image that they haven't previously clicked on. The function uses `setState` to increment the score as well as make other changes that always happen when scoring, namely shuffling the images, increasing the top score if needed, and marking the image as clicked. The clicked status is saved as the `wasClicked` object, which makes it easy to check or update the status of a single image given its filename, which is guaranteed to be a unique identifier.

```javascript
increaseScore = imageSrc => {
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
```

## Technologies Used

* [React](https://reactjs.org/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [Google Fonts](https://fonts.google.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Node Package Manager (NPM)](https://www.npmjs.com/)

## Deployed Link

* [See Live Site](https://sierrachapman.github.io/clicky-game/)

## License

This project is licensed under the MIT license.

## Acknowledgements

* The concept of the Clicky Game was created by Trinity Education Services, A 2U, Inc.
* This implementation of the Clicky Game used images from the [Hubble Space Telescope](https://spacetelescope.org).
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Questions

If you have any questions about the repo, open an issue or contact me directly at siechap@gmail.com. You can find more of my work at [SierraChapman](https://github.com/SierraChapman/).