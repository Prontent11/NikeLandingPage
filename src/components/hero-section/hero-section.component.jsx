import React from 'react'

import './hero-section.styles.css'
import Shoes from '../../assets/Shoes.png'
const HeroSection = () => {
  return (
    <div className='main-container'>
        <div className="right-container">
            <div className="right-container-header">
                <h1>NIKE AIR MAX</h1>
                <h1>JORDAN</h1>
            </div>
            <div className="right-container-body">
                <div className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, impedit? Asperiores vitae unde soluta dolore ratione fuga cupiditate ab harum.</p>
                </div>
                <div className="checkout">
                    <div className="price">$180</div>
                    <button className="addTocart">Add To Cart</button>
                </div>
                <div className="right-container-cards">
                <div className="right-container-card">
                    <img src={Shoes} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="right-container-card">
                <img src={Shoes} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="right-container-card">
                <img src={Shoes} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="left-container">
            <div className="left-container-image">
                <img src={Shoes} alt="" />
            </div>
           
        </div>
    </div>
  )
}

export default HeroSection