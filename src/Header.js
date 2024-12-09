import React, { useState } from "react";
import './App.css';
import { Link } from 'react-router-dom';
import logo from './logo1.svg'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    
    
    <section id='header'>
<div className='container-fluid'>
    <div className='row'>

   <div className='col-2 align-self-center'>
    <div className='logoheader'>
        </div> 
      </div>
      <div className='col-10'>
      <div className='row'>
      <div className='col-1 align-self-center '> 
     <div className='preheader'>
     <div className='match-date'>
        <div className='marque-date'>
          <h5>Oct</h5>
          <h4>19-23</h4>
          <h5>2024</h5>

        </div>
      </div>
     </div>
      </div>

      <div className='col-6 align-self-center'>
      <div className='League-title'>
        <div className='uppvl'>
          <h4>Uttar Pradesh Pro cricketball League</h4>
          <h3>Mirzapur riders vs jUanpur kangaroo</h3>
        </div>
      </div>
      </div>

      <div className='col-3'>
        <div className='countdown-time'>
          <h4>Starts IN</h4>
          <ul className='d-flex timer'>
            <li>
              <h5>18</h5>
              <p>hrs</p>
            </li>
            <li>
              <h5>18</h5>
              <p>hrs</p>
            </li><li>
              <h5>18</h5>
              <p>hrs</p>
            </li>
          </ul>
        </div>
      </div>

      <div className='col-1'> 
     <div className='preheader'>
     <div className='match-date'>
        <div className='marque-date'>
          <h5>Oct</h5>
          <h4>19-23</h4>
          <h5>2024</h5>

        </div>
      </div>
     </div>
      </div>
    


      <div className='col-1'> 
     <div className='preheader'>
     <div className='match-date'>
        <div className='marque-date'>
          <h5>Oct</h5>
          <h4>19-23</h4>
          <h5>2024</h5>

        </div>
      </div>
     </div>
      </div>

     
    

    
    </div>
 
     
      </div>

      <div className='col-2'></div>
      <div className='col-md-12'>
      <div className='row'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav justify-content-between" >
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item separator">
          <Link class="nav-link" to="/about">About </Link>
        </li>
        <li class="nav-item separator">
          <a class="nav-link" href="#">Matches</a>
        </li>
        <li class="nav-item separator">
          <a class="nav-link" href="#">Teams</a>
        </li>
        <li class="nav-item separator">
          <Link class="nav-link" to="/standings">Standings </Link>
        </li>
        <li class="nav-item separator">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item separator button">
          <a class="nav-link button-text " href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
      </div>
      <div className='line'>
{/* <img src={img}   className='img-fluid' /> */}
      </div>
    
    </div>
  </div>
</section>


<nav className={`navbar mbnav navbar-expand-lg bg-body-tertiary ${isOpen ? 'open' : ''}`}>
      <a className="navbar-brand" href="#">uupvl LOGO</a>

      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNavDropdown"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className={`navbar-toggler-icon ${isOpen ? 'close' : ''}`}></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav justify-content-between">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item separator">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item separator">
              <a className="nav-link" href="#">Matches</a>
            </li>
            <li className="nav-item separator">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item separator">
              <Link className="nav-link" to="/standings">Standings</Link>
            </li>
            <li className="nav-item separator">
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item separator button">
              <Link className="nav-link button-text" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</>




  )
}
