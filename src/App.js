import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/script';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';
import Rank from './components/Rank/script';
import ImageDetector from './components/ImageDetector/script';
import Clarifai from 'clarifai';

import { apiKey } from "./assets/hidden";

import './App.css';

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
    this.wrapper = React.createRef();
    this.state = {
      input: '',
      imageUrl: ''
    }
  };

  onInputChange = event => {
    this.setState({ input: event.target.value })
  };

  onBtnClick = () => {
    this.setState({ imageUrl: this.state.input });

    app.models.predict( 
      Clarifai.FACE_DETECT_MODEL, this.state.input).then(
        function(response) {
          console.log(response);
        },
        function(err) {
          throw err;
        }
    );
  };

  render() {
    return (
      <div ref={this.wrapper}>
        <Particles className="particles" params={{ particlesOptions }} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onBtnClick} 
        />
        <ImageDetector imageUrl={this.state.imageUrl} />
      </div>
    );
  };
};

export default App;