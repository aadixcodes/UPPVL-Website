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
import l10 from '../ExperiencePartner2.png'


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

      {/* First Row of Logos */}
      <div className="row justify-content-center">
        <div className="col-3 col-sm-4 col-md-2">

          <h6>Broadcasting Partner
          </h6>
          <img src={l1} alt="uppvl" className="img-fluid" />

        </div>

        <div className="col-3 col-sm-4 col-md-2">
          <h6>Broadcasting Partner
          </h6>
          <img src={l2} alt="uppvl" className="img-fluid" />

        </div>



        <div className="col-3 col-sm-4 col-md-2">
          <h6>Equipment Partner

          </h6>
          <img src={l5} alt="uppvl" className="img-fluid" />
        </div>




        <div className="col-3 col-sm-4 col-md-2">
          <h6>Marchandise Partner
          </h6>
          <img src={l4} alt="uppvl" className="img-fluid" />

        </div>




        <div className="col-3 col-sm-4 col-md-2">
          <h6>Kit Partner
          </h6>
          <img src={l6} alt="uppvl" className="img-fluid" />

        </div>





        <div className="col-3 col-sm-4 col-md-2">
          <h6>Organizing Partner
          </h6>
          <img src={l8} alt="uppvl" className="img-fluid" />

        </div>


        <div className="col-3 col-sm-4 col-md-2">
          <h6>Media  Partner
          </h6>
          <img src={l3} alt="uppvl" className="img-fluid" />
        </div>
        <div className="col-3 col-sm-4 col-md-2">
          <h6>Production Partner
          </h6>
          <img src={l7} alt="uppvl" className="img-fluid" />
        </div>
        {/* <div className="col-3 col-sm-4 col-md-2">
          <h6>Experience Partner
          </h6>
          <img src={l9} alt="uppvl" className="img-fluid" />
        </div> */}
        <div className="col-3 col-sm-4 col-md-2">
          <h6>Radio Partner
          </h6>
          <img src={l10} alt="uppvl" className="img-fluid" />
        </div>




      </div>

      {/* Second Row of Logos */}


      {/* Divider */}
      {/* <hr /> */}


    </section>
  );
};

export default PartnersSection;
