import React from 'react'
import news from './news.png'
import arrow from './arrow.png'
import email from './emailicon.png'
import call from './call.svg'
import  fax from './fax.svg'
import contactgirl from './contactgirl.png'
import submit from './submitbtn.svg'
export default function Contact() {
  return (
    <>
    
<div className="breadcrumb-container">
      <div className="breadcrumb-overlay">
        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">Contact Us</h1>
        </div>
      </div>
    </div>

   

   <section id='calltoaction'>
    <div className='container-fluid'>
        <div className='contact-title'>
            <h4>GET IN TOUCH WITH uupvl</h4>
            <p>
            For any inquiries, partnership opportunities, or further information, feel free to reach out to us directly through the contact details below.
            </p>
        </div>

        <div  className='row'>
           <div className='col-md-3 col-6'>
           <div className='contact-card'>
                <img src={email} className='img-fluid'/>
                <h6>Email Us</h6>
                <p>uupvl@uupvl.com</p>
            </div>
           </div>


           <div className='col-md-3 col-6'>
           <div className='contact-card'>
                <img src={call} className='img-fluid'/>
                <h6>Call Us</h6>
                <p>+91 1234567899</p>
            </div>
           </div>



           <div className='col-md-3 col-6'>
           <div className='contact-card'>
                <img src={fax} className='img-fluid'/>
                <h6>Fax Us</h6>
                <p>+91 12345 67890</p>
            </div>
           </div>




           <div className='col-md-3 col-6'>
           <div className='contact-card'>
                <img src={email} className='img-fluid'/>
                <h6>Reach Us</h6>
                <p>123, Sports Complex, Lucknow</p>
            </div>
           </div>
        </div>
    </div>
   </section>


   <section id="form-us">
    <div className='row'>
        <div className='col-md-6 col-12'>
            <img src={contactgirl} className='img-fluid'/>
        </div>
        <div className='col-md-6 col-12 align-self-center'>
            <div className='form-right'>
                <h4>Send a message</h4>
                <p>Fill out the form below, and our team will respond to your inquiry as soon as possible.</p>


                
            <div className='fill-form'>
                <div className='row'>
                    <div className='col-md-12'>
                    <input type="text" class="form-control" placeholder="Full Name"/>

                        </div>


                        <div className='col-md-6'>
                    <input type="email" class="form-control" placeholder="Email"/>

                        </div>


                        <div className='col-md-6'>
                    <input type="tel" class="form-control" placeholder="Phone"/>

                        </div>
                        

                        <div className='col-md-12'>
                    <input type="text" class="form-control" placeholder="Select your Subject*"/>

                        </div>


                        <div className='col-md-12'>
                        <textarea class="form-control"  placeholder='Message type here...' id="exampleFormControlTextarea1" rows="3"></textarea>

                        </div>


                        <img src={submit}   className='img-fluid submitcustom'/>
                        
                        
                        
                        </div> 
            </div>
</div>

        
        </div>

    </div>
   </section>
    
    </>
  )
}
