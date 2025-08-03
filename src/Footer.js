import React from 'react'
import fb from './facebook.png'
import insta from './instagram.svg'
import  twitter from './twitter.svg'
import linkedin from './linkedin.svg'
import youtube from './youtube (1).svg'
import t1 from './Group 116 (1).png'
import footerlogo from './footer_logo.png'
import f1 from './Mathura.jpg'
import f2 from './Mujjafarnagar.jpg'
import f3 from './Muradabad.jpg'
import f4 from './Noida.jpg'
import f5 from './Gorakhpur.jpg'
import f6 from './Kashi.jpg'
import f7 from './Lucknow.jpg'
import f8 from './f8.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
  <section id="foter-section">


    <div className='container'>

          <div className='teamlogofooter'>
            <div className='logo'>
                <img src={f1}  className='img-fluid' />
            </div>

            <div className='logo'>
                <img src={f2} className='img-fluid' />
            </div>


            <div className='logo'>
                <img src={f3}  className='img-fluid' />
            </div>


            <div className='logo'>
                <img src={f4}  className='img-fluid' />
            </div>


            <div className='logo'>
                <img src={f5}  className='img-fluid' />
            </div>





            <div className='logo'>
                <img src={f6}  className='img-fluid' />
            </div>

            <div className='logo'>
                <img src={f8}  className='img-fluid' />
            </div>

            <div className='logo'>
                <img src={f7}  className='img-fluid' />
            </div>


        </div>
        <div className='footerlink'>

            <ul className='ul-link'>
         
                <li>
                  <Link to="/">  Home</Link>
                </li>

                <li>
                   <Link to="/about"> About </Link>
                </li>

              
                <li>
                     <Link to="/team"> 
                    Team 
                    </Link>
                </li>
                <li>
                    <Link to="/standings">Standings</Link>
                </li>
                <li>
                                        <Link to="/news">News</Link>
 
                </li>
                <li>

                                        <Link to="/contact"> Contact Us </Link>

                   
                </li>
            </ul>


<img src={footerlogo} className='img-fluid logofooter'/>

            <div className='social-icon'>
            <ul>
                <li><img src={fb} className='img-fluid'/></li>
                <li><Link to="https://www.instagram.com/uppvlofficial/" target='_blank'><img src={insta} className='img-fluid'/></Link></li>
                <li><img src={linkedin} className='img-fluid'/></li>
                <li><img src={youtube} className='img-fluid'/></li>
            </ul>
        </div>
        </div>

       
      

        <div className='copy-rigth'>
            <p>© 2025 Uttar Pradesh Pro League. Developed by <Link target='_blank' to="https://varnixmedia.com" className='text-white'>Varnix Media</Link>. All rights reserved.</p>
            <p>Privacy Policy | Terms & Conditions</p>
        </div>
    </div>
  </section>
  )
}
