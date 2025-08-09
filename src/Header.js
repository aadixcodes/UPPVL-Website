// import React, { useState } from "react";
// import "./App.css";
// import { Link } from "react-router-dom";
// import logo from "./footer_logo.png";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { ChevronDown } from 'lucide-react';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showMorePages, setShowMorePages] = useState(false);
//   const [showStandingsDropdown, setShowStandingsDropdown] = useState(false);
  
//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleMorePages = () => {
//     setShowMorePages(!showMorePages);
//   };

//   const toggleStandingsDropdown = () => {
//     setShowStandingsDropdown(!showStandingsDropdown);
//   };

//   const responsiveSettings = {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     1000: {
//       items: 1.8,
//     },
//   };

//   return (
//     <>
//       <section id="header">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-2 relative top-10 align-self-center">
//               <img src="logo192.png" className="headerlogo" />
//             </div>
//             <div className="col-10 align-self-center p-0">
//               <marquee behavior="scroll" direction="left" scrollamount="15">
//                 <h5 className="col-auto text-white py-1 px-3 event-card d-flex align-items-center marquee mb-0">
//                   🔥 UPPVL Grand Opening on 7th August, 3:30 PM at Shaheed Vijay Singh Pathik Sports Complex, Greater Noida</h5>
//               </marquee>
//             </div>

//             <div className="col-2 align-self-center"></div>

//             <div className="col-md-10">
//               <div className="row">
//                 <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
//                   <div className="container-fluid">
//                     <button
//                       className="navbar-toggler"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarNavDropdown"
//                       aria-controls="navbarNavDropdown"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div
//                       className="collapse navbar-collapse"
//                       id="navbarNavDropdown"
//                     >
//                       <ul className="navbar-nav justify-content-between">
//                         <li className="nav-item">
//                           <Link
//                             className="nav-link active"
//                             aria-current="page"
//                             to="/"
//                           >
//                             Home
//                           </Link>
//                         </li>
//                         <li className="nav-item separator">
//                           <Link className="nav-link" to="/about">
//                             About
//                           </Link>
//                         </li>
//                         <li className="nav-item separator">
//                           <Link className="nav-link" to="/fixtures">
//                             Fixtures
//                           </Link>
//                         </li>
//                         <li className="nav-item separator">
//                           <Link className="nav-link" to="/team">
//                             Teams
//                           </Link>
//                         </li>
//                         <li className="nav-item dropdown separator d-none d-lg-block">
//                           <div 
//                             className="nav-link dropdown-toggle"
//                             onClick={toggleStandingsDropdown}
//                             style={{cursor: 'pointer', color: '#0A1434'}}
//                           >
//                             Standings 
//                             {/* <ChevronDown className="inline ml-1" size={16} /> */}
//                           </div>
//                           {showStandingsDropdown && (
//                             <div className="dropdown-menu show">
//                               <Link className="dropdown-item" to="/standings" onClick={toggleStandingsDropdown}>
//                                 Standings
//                               </Link>
//                               <Link className="dropdown-item" to="/points-table" onClick={toggleStandingsDropdown}>
//                                 Point Table
//                               </Link>
//                             </div>
//                           )}
//                         </li>
//                         <li className="nav-item separator d-lg-none">
//                           <Link className="nav-link" to="/standings">
//                             Standings
//                           </Link>
//                         </li>
//                         <li className="nav-item separator d-lg-none">
//                           <Link className="nav-link" to="/point-table">
//                             Point Table
//                           </Link>
//                         </li>
//                         <li className="nav-item separator">
//                           <Link className="nav-link" to="/gallery">
//                             Gallery
//                           </Link>
//                         </li>
//                         <li className="nav-item separator">
//                           <Link className="nav-link" to="/uppvl-tv">
//                             UPPVL TV
//                           </Link>
//                         </li>
//                         <li className="nav-item separator">
//                           <Link className="nav-link" to="/auction">
//                             Auction
//                           </Link>
//                         </li>
//                         <li className="nav-item separator">
//                           <Link className="nav-link" to="/news">
//                             News
//                           </Link>
//                         </li>
//                         <li className="nav-item separator">
//                           <Link className="nav-link" to="/blog">
//                             Blogs
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//             <div className="line"></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./footer_logo.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMorePages, setShowMorePages] = useState(false);
  const [showStandingsDropdown, setShowStandingsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMorePages = () => {
    setShowMorePages(!showMorePages);
  };

  const toggleStandingsDropdown = () => {
    setShowStandingsDropdown(!showStandingsDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowStandingsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const responsiveSettings = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 1.8,
    },
  };

  return (
    <>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 relative top-10 align-self-center">
              <img src="logo192.png" className="headerlogo" />
            </div>
            <div className="col-10 align-self-center p-0">
              <marquee behavior="scroll" direction="left" scrollamount="15">
                <h5 className="col-auto text-white py-1 px-3 event-card d-flex align-items-center marquee mb-0">
                  🔥 UPPVL Grand Opening on 7th August, 3:30 PM at Shaheed Vijay Singh Pathik Sports Complex, Greater Noida</h5>
              </marquee>
            </div>

            <div className="col-2 align-self-center"></div>

            <div className="col-md-10">
              <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav justify-content-between">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item separator">
                          <Link className="nav-link" to="/about">
                            About
                          </Link>
                        </li>
                        <li className="nav-item separator">
                          <Link className="nav-link" to="/fixtures">
                            Fixtures
                          </Link>
                        </li>
                        <li className="nav-item separator">
                          <Link className="nav-link" to="/team">
                            Teams
                          </Link>
                        </li>
                        <li className="nav-item dropdown separator d-none d-lg-block" ref={dropdownRef}>
                          <div 
                            className="nav-link dropdown-toggle"
                            onClick={toggleStandingsDropdown}
                            style={{cursor: 'pointer', color: '#0A1434'}}
                          >
                            Points Table 
                            {/* <ChevronDown className="inline ml-1" size={16} /> */}
                          </div>
                          {showStandingsDropdown && (
                            <div className="dropdown-menu show">
                              <Link className="dropdown-item" to="/points-table" onClick={toggleStandingsDropdown}>
                                Points Table
                              </Link>
                              <Link className="dropdown-item" to="/live-score" onClick={toggleStandingsDropdown}>
                                Live Matches Score
                              </Link>
                            </div>
                          )}
                        </li>
                        <li className="nav-item separator d-lg-none">
                          <Link className="nav-link" to="/points-table">
                          Points Table
                          </Link>
                        </li>
                        <li className="nav-item separator d-lg-none">
                          <Link className="nav-link" to="/live-score">
                          Live Matches Score
                          </Link>
                        </li>
                        <li className="nav-item separator">
                          <Link className="nav-link" to="/gallery">
                            Gallery
                          </Link>
                        </li>
                        <li className="nav-item separator">
                          <Link className="nav-link" to="/uppvl-tv">
                            UPPVL TV
                          </Link>
                        </li>
                        <li className="nav-item separator">
                          <Link className="nav-link" to="/auction">
                            Auction
                          </Link>
                        </li>
                        <li className="nav-item separator">
                          <Link className="nav-link" to="/news">
                            News
                          </Link>
                        </li>
                        <li className="nav-item separator">
                          <Link className="nav-link" to="/blog">
                            Blogs
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </section>
    </>
  );
}