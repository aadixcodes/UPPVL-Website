import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import l1 from '../DD sport.png'
import l2 from '../Sony.png'
import l3 from '../Varnix.png'
import l4 from '../Gold sports.png'
import l5 from '../nivia2.png'
import l6 from '../Spartan.png'
import l7 from '../Night Owl.png'
import l8 from '../About/aadiyogi.png'
import l9 from '../RadioPartner2.png'
import l10 from '../OttPartner.png'
import l11 from '../bookmyshow.png'


import g1 from '../SponsorsLogo/Group1.png'
import g2 from '../SponsorsLogo/Group2.png'
import g3 from '../SponsorsLogo/Group3.png'
import g4 from '../SponsorsLogo/Group4.png'
import g5 from '../SponsorsLogo/Group5.png'
import g6 from '../SponsorsLogo/Group6.png'
// import g7 from '../SponsorsLogo/Group7.png'
import g8 from '../SponsorsLogo/Group8.png'
import g9 from '../SponsorsLogo/Group9.png'
import g10 from '../SponsorsLogo/Group10.png'
import g11 from '../SponsorsLogo/Group11.png'
import g12 from '../SponsorsLogo/Group12.png'
import g13 from '../SponsorsLogo/Group13.png'
import g14 from '../SponsorsLogo/Group14.png'
import g15 from '../SponsorsLogo/Group15.png'
import g16 from '../SponsorsLogo/Group16.png'
import g17 from '../SponsorsLogo/Group17.png'

const PartnersSection = () => {
  const logos = [
    l1,
    l2,
    l2,
    l2,
    l2,
  ];

  return (
    <section className="container text-center py-5" id='partner' aria-label="Our Partners Section">
      {/* Decorative Yellow Line */}
      <div className="d-flex justify-content-center mb-2">
        {/* <div
          style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#ffc107',
            transform: 'rotate(-15deg)',
            transformOrigin: 'center',
          }}
        ></div> */}
      </div>

      {/* Section Heading */}
      <h2 className="partner mb-2">
        OUR PARTNERS
      </h2>
      <br></br>

      {/* Priority Group 1 Logo - Single in row with bigger size */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <img src={g1} alt="uppvl" className="img-fluid" style={{ maxHeight: '160px' }} />
        </div>
      </div>

      {/* Rest of the Logos */}
      <div className="row justify-content-center">
        <div className="col-3 col-sm-4 col-md-2">
          <img src={g2} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g3} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g4} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g5} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g6} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g8} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g9} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g10} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g11} alt="uppvl" className="img-fluid" />
        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <img src={g12} alt="uppvl" className="img-fluid" />
        </div>
        <div className="col-3 col-sm-4 col-md-2">
          <img src={g13} alt="uppvl" className="img-fluid" />
        </div>
        <div className="col-3 col-sm-4 col-md-2">
          <img src={g14} alt="uppvl" className="img-fluid" />
        </div>
        <div className="col-3 col-sm-4 col-md-2">
          <img src={g15} alt="uppvl" className="img-fluid" />
        </div>
        {/* <div className="col-3 col-sm-4 col-md-2">
          <img src={g16} alt="uppvl" className="img-fluid" />
        </div> */}
        <div className="col-3 col-sm-4 col-md-2">
          <img src={g17} alt="uppvl" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;