import React from "react";
import news from "./news.png";
import arrow from "./arrow.png";
import email from "./emailicon.png";
import call from "./call.svg";
import fax from "./fax.svg";
import contactgirl from "./contactgirl.png";
import submit from "./submitbtn.svg";
export default function Contact() {
  return (
    <div style={{background:"#0c0b3b", paddingBottom:"10px"}}>
      <div  className="breadcrumb-container">
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Contact Us</h1>
          </div>
        </div>
      </div>

      <section id="calltoaction">
        <div className="container-fluid">
          <div className="contact-title">
            <div class="rhombus"></div>
            <h4 style={{fontSize:"36px", fontWeight:"800"}}>GET IN TOUCH WITH UPPVL</h4>
            <p style={{fontSize:"16px", fontWeight:"400"}}>
              For any inquiries, partnership opportunities, or further
              information, feel free to reach out tous directly through the
              contact details below.
            </p>
          </div>

          <div className="row">
            <div  className="col-md-4 col-5">
              <div className="contact-card">
                <img src={email} className="img-fluid" />
                <h6>Email Us</h6>
                <p>support@uppvl.com</p>
              </div>
            </div>

            <div  className="col-md-4 col-6">
              <div className="contact-card">
                <img src={call} className="img-fluid" />
                <h6>Call Us</h6>
                <p>+91 92369 52096</p>
              </div>
            </div>

           

            <div  className="col-md-4 col-6">
              <div className="contact-card">
                <img src={email} className="img-fluid" />
                <h6>Reach Us</h6>
                <p>Sector-72, Noida Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form-us">
        <div className="row">
          <div className="col-md-6 col-12">
            <img src={contactgirl} className="img-fluid" />
          </div>
          <div style={{display: "flex", gap: "8px"}} className="col-md-6 col-12 align-self-center">
            <div className="form-right">
              <h4 style={{fontSize:"36px", fontWeight:"800"}}>Send a message</h4>
              <p style={{fontSize:"14px", fontWeight:"400"}}>
                Fill out the form below, and our team will respond to
                yourinquiry as soon as possible.
              </p>

              <div className="fill-form">
                <div style={{display: "flex", gap: "20px"}} className="row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                    <div className="col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Select your Subject*"
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      class="form-control"
                      placeholder="Message type here..."
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>

                  <img src={submit} className="img-fluid submitcustom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
