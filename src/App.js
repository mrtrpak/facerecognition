import React from 'react';
import ImageLinkForm from './components/ImageLinkForm/script';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';

import './App.css';


export default function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <ImageLinkForm />
    </div>
  );
}