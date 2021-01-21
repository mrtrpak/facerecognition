import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/script';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';
import Rank from "./components/Rank/script";

import './App.css';

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
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = event => {
    console.log(event.target.value);
  };

  onBtnClick = () => {
    app.models.predict("6d9e77c307e7456c99a5880de9d3a24e", "https://cdn.aarp.net/content/dam/aarp/home-and-family/personal-technology/2019/04/1140-digitize-photos.jpg").then(

      function(response) {
        
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
      </div>
    );
  };
};

export default App;