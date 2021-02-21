import React, { Component } from 'react';

import './style.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    };
  };

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch('https://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data === 'success') {
        this.props.onRouteChange('home');
      };
    });
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="br3 ba dar-gray b--black-10 mv4 w-75-l w-50-m w-25-1 shadow-3 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 1h-copy f6"  htmlFor="email-address">Email</label>
                <input 
                  onChange={this.onEmailChange} 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address" 
                  id="email-address" 
                />
              </div>
              <div className="mv3">
                <label className="db fw6 1h-copy f6" htmlFor="password">Password</label>
                <input 
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password" 
                  id="password" 
                />
              </div>
            </fieldset>
            <div>
              <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Sign In"
                onClick={() => this.onSubmitSignIn()}
              />
            </div>
            <div className="1h-copy mt3">
              <p 
                className="f6 link dim black db pointer"
                onClick={() => onRouteChange('register')}
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
};

export default SignIn;