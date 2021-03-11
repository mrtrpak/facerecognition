import React, { Component } from 'react';

import './style.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errMsg: '',
      display: 'none'
    };
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  validatedEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  updateDisplay = () => {
    const { display } = this.state;

    if (display === 'none') {
      this.setState({ display: 'block' });
    } else {
      this.setState({ display: 'none'});
    };
  };

  onSubmitRegister = () => {
    const { name, email, password } = this.state;
    const { updateDisplay, validatedEmail } = this;

    if (password.length < 8) {
      updateDisplay();
      this.setState({ errMsg: 'Password must contain at least 8 characters' });
    } else if (password.length > 100) {
      updateDisplay();
      this.setState({ errMsg: 'Password must be less than 100 characters' });
    } else if (!validatedEmail(email)) {
      updateDisplay();
      this.setState({ errMsg: 'Must have standard email format with an @ and dot'});
    } else {
      fetch('https://pacific-wildwood-77993.herokuapp.com/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
  
      })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        };
      });
    };
  };
  
  render() {
    const { onNameChange, onEmailChange, onPasswordChange, onSubmitRegister } = this;
    const { errMsg, display } = this.state;

    return (
      <div className="container pa4">
        <div 
          className=" ma1 w-50-l w-60-m w-25-1 center"
          style={{ display: display }}
        >
          <h4 className="br3 m3"> {errMsg} </h4>
        </div>
        <article className="br3 ba dar-gray b--black-10 mv4 w-50-l w-60-m w-25-1 shadow-3 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="register" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">REGISTER</legend>
                <div className="mt2">
                  <label className="db fw6 1h-copy f6"  htmlFor="name">Name</label>
                  <input 
                    onChange={onNameChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
                    type="name" 
                    name="name" 
                    id="name" 
                    placeholder="Optional"
                    />
                </div>
                <div className="mt2">
                  <label className="db fw6 1h-copy f6"  htmlFor="email-address">Email</label>
                  <input 
                    onChange={onEmailChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address" 
                    id="email-address"
                    placeholder="Must have @ and dot" 
                    />
                </div>
                <div className="mv3">
                  <label className="db fw6 1h-copy f6" htmlFor="password">Password</label>
                  <input 
                    onChange={onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Must be between 8-100'
                    />
                </div>
              </fieldset>
              <div>
                <input 
                  className="b ph3 pv2 input-reset b--black bg-transparent grow pointer f6 dib"
                  type="submit" 
                  value="register"
                  onClick={onSubmitRegister}
                  />
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
};

export default Register;