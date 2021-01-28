import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import ImageLinkForm from './components/ImageLinkForm/script';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';
import Rank from './components/Rank/script';
import ImageDetector from './components/ImageDetector/script';

import './App.css';

import { apiKey } from "./assets/hidden";


const app = new Clarifai.App({
  apiKey: apiKey
});

const particlesOptions = {
  particles: {
    Number: {
      value: 30
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 3
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  };

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = box => {
    console.log(box);
    this.setState({ box });
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  };

  onBtnSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    app.models
      .predict( 
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Particles className="particles" params={{ particlesOptions }} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onBtnSubmit} 
        />
        <ImageDetector box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  };
};

export default App;