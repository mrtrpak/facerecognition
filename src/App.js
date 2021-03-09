import React, { Component } from 'react';
import Particles from 'react-particles-js';

import ImageLinkForm from './components/ImageLinkForm/script';
import Logo from './components/Logo/script';
import Navigation from './components/Navigation/script';
import Rank from './components/Rank/script';
import ImageDetector from './components/ImageDetector/script';
import Register from './components/Register/script';
import SignIn from './components/SignIn/script';

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
};

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  };

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: (clarifaiFace.top_row * height) + (height * 0.15),
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: (height - (clarifaiFace.bottom_row * height)) + (height * 0.15)
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

      fetch('http://localhost:3001/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(
              Object.assign(this.state.user, { entries: count }))
            }
          )
          .catch(console.log);
        };
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, box, imageUrl } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={{ particlesOptions }} />
        <Navigation 
          onRouteChange={this.onRouteChange} 
          isSignedIn={isSignedIn}
        />
        { this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank name={this.state.user.name} 
              entries={this.state.user.entries} />
            <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onSubmit={this.onBtnSubmit} 
            />
            <ImageDetector box={box} imageUrl={imageUrl} />
          </div>
          : (
            this.state.route === 'signin' ?
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
            :
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
          
      }
      </div>
    );
  };
};

export default App;