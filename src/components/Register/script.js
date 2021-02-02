import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <article className="br3 ba dar-gray b--black-10 mv4 w-75-l w-50-m w-25-1 shadow-3 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="register" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 1h-copy f6"  htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 1h-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
            </div>
          </fieldset>
          <div>
            <input 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Sign In"
              onClick={onRouteChange}
            />
          </div>
          <div className="1h-copy mt3">
            <a href="#0" className="f6 link dim black db">Login</a>
          </div>
        </form>
      </main>
    </article>
  );
};

export default Register;