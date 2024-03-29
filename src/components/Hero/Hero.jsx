import React from 'react'
import img1 from '../../imgs/headerLeftimg.jpeg'
import img2 from '../../imgs/img2Left.jpeg'
import img3 from '../../imgs/img3Left.jpeg'

const Hero = () => {
  return (
    <div>
<div className="flex">
        <div className="left">
            <h1>Easy way to find a
                perfect property</h1>
                <p>
                    We provide a complete service for the sale,
                    purchase or rental of real estate  
                </p>
        </div>
        <div className="right">
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
        </div>
    </div>
    <div className="form">
        <div className="searchtype">
            <h3>buy</h3>
            <h3>rent</h3>
        </div>
       
        <form id="">
            <label for="location"></label>
            <input type="text" name="" id="location" placeholder="select your city"/>
            <label for="number"></label>
            <input type="number" placeholder="upto range" id="number"/>
            <label for="type"></label>
            <select name="prop-type" id="type">
                <option value="">x</option>
                <option value="">r</option>
                <option value="">y</option>
                <option value="">z</option>
                <option value="">u</option>
            </select>
            <button >apply</button>
        </form>
    

         <div className="landing">
         </div>
    </div>

      </div>
    
  )
}

export default Hero
