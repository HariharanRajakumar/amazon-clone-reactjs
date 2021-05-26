import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__box">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>
        </form>

        <p>By Signing-in you agree to the Amazon Condition of use</p>
        <button className="registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
