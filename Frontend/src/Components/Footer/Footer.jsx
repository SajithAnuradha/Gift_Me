import React from 'react'
import './Footer.css'
import { assets } from '../../assets/UserAssets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>This is my contet</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
             <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
             </div>
             <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>  
                <ul>
                    <li>
                        +94-774109249
                    </li>
                    <li>
                        contact.@gmail.com
                    </li>
                </ul>
                    
                    </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copright 2024 @ Tomato.com - All Right Rserved.
        </p>
    </div>
  )
}

export default Footer