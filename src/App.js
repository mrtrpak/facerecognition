import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import ImageLinkForm from './components/ImageLinkForm/script';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';
import Rank from './components/Rank/script';
import ImageDetector from './components/ImageDetector/script';
import SignIn from './components/SignIn/script';

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
      box: {},
      route: 'signIn'
    }
  };

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: (clarifaiFace.top_row * height) + (height * 0.2),
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: (height - (clarifaiFace.bottom_row * height)) + (height * 0.2)
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

  onRouteChange = () => {
    const route = this.state.route
    switch (route) {
      case 'signIn': 
        this.setState({ route: 'home'});
        break;
      case 'home' :
        this.setState({ route: 'signIn'});
        break;
      default:
        this.setState({ route: 'signIn'});
    }
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={{ particlesOptions }} />
        <Navigation />
        { this.state.route === 'signIn' ?
        <SignIn onRouteChange={this.onRouteChange} />
          :
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onBtnSubmit} 
          />
          <ImageDetector box={this.state.box} imageUrl={this.state.imageUrl} />
        </div>
      }
      </div>
    );
  };
};

export default App;