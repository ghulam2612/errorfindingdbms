import React from 'react'
import {Link} from 'react-router-dom';
import img from '../../imgs/logonav.jpg'

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <nav>
            <div className="logo">
                <p><img id="hlogo" src={img}alt="logoIcon"/> <h2>ezSTAY</h2></p>
            </div>
            <div className="navlink">
                <Link to="">Home </Link>
                <Link to="">Contact Us</Link>
                <Link to="">Properties</Link>
                <Link to="./signup.html" id="signup">sign up</Link>
                <Link to="./login.html" id="login">log in</Link>
            </div>
        </nav>
        <div className="line">
        </div>
    </div>
    </div>
  )
}

export default Navbar
