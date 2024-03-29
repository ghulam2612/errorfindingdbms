import React from 'react'
import img1 from '../../imgs/63-home 1.png'
import img2 from '../../imgs/63-home 2.png'
import img3 from '../../imgs/63-home 3.png'
import img4 from '../../imgs/63-home 4.png'

const Features = () => {
  return(
    <div>
      
      <div className="text">
      <h1>Properties By Area</h1>
      <p>Lorem ipsum dolor sit amet consectetur lfdjf  does it make some thdng woerds adipisicing elit.<br/> Autem tempora odit, libero mollitia dolor nulla optio voluptate.</p>
    </div>

    <div className="read-more-card">
        <div className="container">
            <input type="checkbox" id="ch"/>
            <img src={img1} alt=""/>
            <h4>sell your home</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magnam architecto nostrum fugiat ratione placeat suscipit, quaerat repellendus at.</p>
            </div>
             <label for="ch">read more</label>
             <label for="ch">read less</label>
            </div>
        </div>
        <div className="container">
            <input type="checkbox" id="ch"/>
            <img src={img2} alt=""/>
            <h4>rent your home</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magnam architecto nostrum fugiat ratione placeat suscipit, quaerat repellendus at.</p>
            </div>
             <label for="ch">read more</label>
             <label for="ch">read less</label>
            
        </div>    
        <div className="container">
            <input type="checkbox" id="ch"/>
            <img src={img3} alt=""/>


            <h4>buy your home</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magnam architecto nostrum fugiat ratione placeat suscipit, quaerat repellendus at.</p>
            </div>
             <label for="ch">read more</label>
             <label for="ch">read less</label>
            
        </div>    
        <div className="container">
            <input type="checkbox" id="ch"/>
            <img src={img4} alt=""/>
            <h4>free marketing</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magnam architecto nostrum fugiat ratione placeat suscipit, quaerat repellendus at.</p>
            </div>
             <label for="ch">read more</label>
             <label for="ch">read less</label>
            
        </div>


    </div>
  )
}

export default Features;
