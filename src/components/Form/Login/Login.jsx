import React from 'react'
import {Link} from 'react-router-dom';

import './Login.css';

import img1 from '../../../imgs/Logo-google-icon-PNG.png'

const Login = () => {
    function login() {
        // Add your login logic here
        alert("Login logic goes here");
    }

    function loginWithGoogle() {
        // Add your Google login logic here
        alert("Login with Google logic goes here");
    }
  return (
    <div className="blur-container">
    <div className="login-container">
        <h2>Welcome back! Login to your account</h2>
        <label for="emailUsername">Email or Username:</label>
        <input type="text" id="emailUsername" name="emailUsername" required/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        <Link to="forgotpass.html" className="forgot-password">Forgot Password?</Link>

        <div className="login-options">
            <button type="button" onclick={login}>Login</button>
            <button type="button" className="google-login" onclick={loginWithGoogle()}>
                <img src={img1} alt="Google Icon"> Login with Google</img>
            </button>
        </div>

        <div className="create-account">
            Don't have an account? <Link to="/Signup">Create Your Account</Link>
        </div>
        </div>
        </div>

  )
}

export default Login
