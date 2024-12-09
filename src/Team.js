import React from 'react'
import contactgirl from './contactgirl.png'
import submit from './submitbtn.svg'
import team1 from './team1.png'
import team2 from './team2.png'

export default function Team() {
  return (
    <>
<div className="breadcrumb-container">
      <div className="breadcrumb-overlay">
        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">Team</h1>
        </div>
      </div>
    </div>
   <section id='teameet'>
    <div className='container-fluid'>
        <div className='contact-title'>
            <h4>Explore Teams</h4>
            <p>
            For any inquiries, partnership opportunities, or further information, feel free to reach out to us directly through the contact details below.
            </p>
        </div>

        <div  className='row'>
           <div className='col-md-3 col-6'>
          <img src={team1} className='img-fluid t1'/>
           </div>


           <div className='col-md-3 col-6'>
          <img src={team2} className='img-fluid t2'/>
           </div>
           <div className='col-md-3 col-6'>
          <img src={team1} className='img-fluid t3'/>
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
    </div>
    
   </section>
    
    </>
  )
}
