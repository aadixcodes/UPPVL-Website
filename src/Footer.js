import React from 'react'
import fb from './facebook.png'
import insta from './instagram.svg'
import  twitter from './twitter.svg'
import linkedin from './linkedin.svg'
import youtube from './youtube (1).svg'
import t1 from './Group 116 (1).png'
import footerlogo from './footer_logo.png'
export default function Footer() {
  return (
  <section id="foter-section">

    <div className='container'>
        <div className='footerlink'>

            <ul className='ul-link'>
            <li>
            <img src={footerlogo} className='img-fluid'/>

                </li>
                <li>
                    Home
                </li>

                <li>
                    About 
                </li>

                <li>
                    Match 
                </li>
                <li>
                    Team 
                </li>
                <li>
                    Standings 
                </li>
                <li>
                    News 
                </li>
                <li>
                    Contact Us 
                </li>
            </ul>

            <div className='social-icon'>
            <ul>
                <li><img src={fb} className='img-fluid'/></li>
                <li><img src={insta} className='img-fluid'/></li>
                <li><img src={twitter} className='img-fluid'/></li>
                <li><img src={linkedin} className='img-fluid'/></li>
                <li><img src={youtube} className='img-fluid'/></li>
            </ul>
        </div>
        </div>

       
        <div className='teamlogofooter'>
            <div className='logo'>
                <img src={t1}  className='img-fluid' />
            </div>

            <div className='logo'>
                <img src={t1}  className='img-fluid' />
            </div>


            <div className='logo'>
                <img src={t1}  className='img-fluid' />
            </div>



            <div className='logo'>
                <img src={t1}  className='img-fluid' />
            </div>


            <div className='logo'>
                <img src={t1}  className='img-fluid' />
            </div>


            <div className='logo'>
                <img src={t1}  className='img-fluid' />
            </div>

            <div className='logo'>
                <img src={t1}  className='img-fluid' />
            </div>


            <div className='logo'>
                <img src={t1}  className='img-fluid' />
            </div>
        </div>

        <div className='copy-rigth'>
            <p>© 2024 Uttar Pradesh Pro  League. All rights reserved</p>
            <p>Privacy Policy | Terms & Conditions</p>
        </div>
    </div>
  </section>
  )
}
