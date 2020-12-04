import React from 'react';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';
import ImageLinkForm from './components/ImageLinkForm/script';


export default function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <ImageLinkForm />
    </div>
  );
}