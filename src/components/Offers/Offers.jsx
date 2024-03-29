import React from 'react'
import img1 from '../../imgs/room.jpg'
import img2 from '../../imgs/room.jpg'
import img3 from '../../imgs/room.jpg'

const Offers = () => {
  return (
    <div>
          <h1 className="top-offer">Top offers</h1>

<div className="off-container">
    <div className="offcard">
        <img src={img1} alt=""/>
        <div className="details">
            <p>for rent</p>
            <p>3-bed aparment | 67sq.mt</p>
            <p>3811 Ditmars Blvd Astorla, NY 11105</p>
            <p><i className="fa-solid fa-money-check-dollar"></i> $894</p>
        </div>
        <div className="line">

        </div>
        <div className="commono">
            <p>3 <i className="fa-solid fa-car"></i></p>
            <p>2 <i className="fa-solid fa-toilet"></i></p>
            <p>2 <i className="fa-solid fa-bed"></i></p>
        </div>
    </div>
    <div className="offcard">
        <img src={img2} alt=""/>
        <div className="details">
            <p>for rent</p>
            <p>3-bed aparment | 67sq.mt</p>
            <p>3811 Ditmars Blvd Astorla, NY 11105</p>
            <p><i className="fa-solid fa-money-check-dollar"></i> $894</p>
        </div>
        <div className="line">

        </div>
        <div className="commono">
            <p>3 <i className="fa-solid fa-car"></i></p>
            <p>2 <i className="fa-solid fa-toilet"></i></p>
            <p>2 <i className="fa-solid fa-bed"></i></p>
        </div>
    </div>
    <div className="offcard">
        <img src={img3} alt=""/>
        <div className="details">
            <p>for rent</p>
            <p>3-bed aparment | 67sq.mt</p>
            <p>3811 Ditmars Blvd Astorla, NY 11105</p>
            <p><i className="fa-solid fa-money-check-dollar"></i> $894</p>
        </div>
        <div className="line">

        </div>
        <div className="commono">
            <p>3 <i className="fa-solid fa-car"></i></p>
            <p>2 <i className="fa-solid fa-toilet"></i></p>
            <p>2 <i className="fa-solid fa-bed"></i></p>
        </div>
    </div>
    <div className="offcard">
        <img src={img1} alt=""/>
        <div className="details">
            <p>for rent</p>
            <p>3-bed aparment | 67sq.mt</p>
            <p>3811 Ditmars Blvd Astorla, NY 11105</p>
            <p> <i className="fa-solid fa-money-check-dollar"></i> $894</p>
        </div>
        <div className="line">

        </div>
        <div className="commono">
            <p>3 <i className="fa-solid fa-car"></i></p>
            <p>2 <i className="fa-solid fa-toilet"></i></p>
            <p>2 <i className="fa-solid fa-bed"></i></p>
        </div>
    </div>
</div>

    </div>
  )
}

export default Offers
