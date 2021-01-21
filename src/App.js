import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/script';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';
import Rank from './components/Rank/script';
import FaceRecognition from './components/FaceRecognition/script';
import Clarifai from 'clarifai';

import './App.css';

const app = new Clarifai.App({
  apiKey: '6d9e77c307e7456c99a5880de9d3a24e'
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
      input: ''
    }
  };

  onInputChange = event => {
    console.log(event.target.value);
  };

  onBtnClick = () => {
    app.models.predict( app.apiKey, "https://samples.clarifai.com").then(

      function(response) {
        console.log(response);
      },
      function(err) {
        
      }
    );
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
          onSubmit={this.onBtnClick} 
        />
        <FaceRecognition />
      </div>
    );
  };
};

export default App;