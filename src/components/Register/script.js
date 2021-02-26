import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = () => {
    fetch('https://localhost:3001/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })

    })
    .then(response => response.json())
    .then(user => {
      console.log(user);
      if (user) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      };
    });
  };
  
  render() {
    return (
      <article className="br3 ba dar-gray b--black-10 mv4 w-75-l w-50-m w-25-1 shadow-3 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="register" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt2">
                <label className="db fw6 1h-copy f6"  htmlFor="email-address">Name</label>
                <input 
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="name" 
                  name="name" 
                  id="name" 
                />
              </div>
              <div className="mt2">
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
                className="b3 ma3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit" 
                value="register"
                onClick={this.onSubmitRegister}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
};

export default Register;