import React from 'react'
import {Link} from 'react-router-dom';

import './Signup.css'
function show(){
    let ch=document.getElementById('password');
    if(ch.type==='password'){
        ch.type='text'
    }
    else{
        ch.type='password';
    }
}
function register() {
    alert("Registration logic goes here");
}
const Signup = () => {
  return (
    <div className="signup-container">
    <h2>Create Your Account</h2>
    <div className="form-group">
        <input type="email" id="email" name="email" required/>
        <label for="email">Email:</label>
    </div>

    <div className="form-group">
        <input type="text" id="firstName" name="firstName" required/>
        <label for="firstName">First Name:</label>
    </div>
    <div className="form-group">
        <input type="text" id="lastName" name="lastName" required/>
        <label for="lastName">Last Name:</label>
    </div>

    <div className="form-group">
        <input type="password" id="password" name="password" required/>
        <label for="password">Password:</label>
    </div>
        <input type="checkbox" onclick={show()} id="showPassword" />
        <p id="one">show password</p>

    <button type="button" onclick={register()}>Create Your Account</button>

    <div className="terms">
        By registering, you agree to the <Link to="#">privacy policy</Link> and <Link to="#">terms of service</Link>.
    </div>

    <div className="login">
        Already have an account? <Link to="/Login">Login</Link>
    </div>
</div>

  )
}

export default Signup
