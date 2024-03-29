import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../imgs/logonav.jpg'
const Footer = () => {
  return (
    <div>
    <div class="footer">
        <div class="left">
            <div class="logo">
                <img src={img1} alt=""/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Dolore sequi suscipit, neque beatae voluptatibus aut!</p>
            <div class="socialmediahandle">
                <Link to=""><i class="fa-brands fa-facebook"></i></Link>
                <Link to=""><i class="fa-brands fa-instagram"></i></Link>
                <Link to=""><i class="fa-brands fa-linkedin"></i></Link>
                <Link to=""><i class="fa-brands fa-twitter"></i></Link>
                <span>&copy; All rights are reserrved ezStay</span>
            </div>
        </div>
        <div class="right">
            <div class="tour eq">
                <h3>take a tour</h3>
                <Link to="">Features</Link>
                <Link to="">partners</Link>
                <Link to="">pricing</Link>
                <Link to="">product</Link>
                <Link to="">support</Link>
            </div>
            <div class="company eq">
                <h3>our company</h3>
                <Link to="">about us</Link>
                <Link to="">agent</Link>
                <Link to="">blog</Link>
                <Link to="">media</Link>
                <Link to="">contact us</Link>
            </div>
            <div class="sub eq">
                <h3>subscribe</h3>
                <p>Lorem ipsum dolor sit,<br/> amet consectetur adipisicing elit.</p>
                <input type="email" value="" placeholder="email address"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
