import React from 'react';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/script';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';
import Rank from "./components/Rank/script";

import './App.css';

const particlesOptions = {
  particles: {
    Number: {
      value: 300
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

export default function App() {
  return (
    <div>
      <Particles className="particles" params={{ particlesOptions }} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}