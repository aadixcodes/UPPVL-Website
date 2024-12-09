import React from 'react'
import news from './news.png'
import arrow from './arrow.png'
export default function News() {
  return (
    <>
    
<div className="breadcrumb-container">
      <div className="breadcrumb-overlay">
        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">News</h1>
        </div>
      </div>
    </div>

   <section className='newpage'>

   <div className='container-fluid'>
        <div className='row'>
            


        <div className='col-md-4 col-12'>
      <div className='newscard'>
       <div className='newsbox'>
        <img src={news} className='img-fluid'/>

        <div className='caption-news'>
          <h5>Lorem ipsum dolor, consectetur sitadipiscing elit amet</h5>
          <p>Lorem ipsum dolor, consectetur sitadipiscing elit amet</p>

          <div className='read-more'>
            <p> Read More <img src={arrow} className='img-fluid arrowreadmore' /></p>
          </div>
        </div>

      <div className='card-footer'>

        <div className='row'>
          <div className='col-md-6 col-8'>
            <div className='date-news'>
              <p>3 July 2024  &nbsp;&nbsp; | &nbsp;&nbsp; NEWS</p>
            </div>
          </div>

        </div>
      </div>


       </div>

      </div>


    </div>


    <div className='col-md-4 col-12'>
      <div className='newscard'>
       <div className='newsbox'>
        <img src={news} className='img-fluid'/>

        <div className='caption-news'>
          <h5>Lorem ipsum dolor, consectetur sitadipiscing elit amet</h5>
          <p>Lorem ipsum dolor, consectetur sitadipiscing elit amet</p>

          <div className='read-more'>
            <p> Read More <img src={arrow} className='img-fluid arrowreadmore' /></p>
          </div>
        </div>

      <div className='card-footer'>

        <div className='row'>
          <div className='col-md-6 col-8'>
            <div className='date-news'>
              <p>3 July 2024  &nbsp;&nbsp; | &nbsp;&nbsp; NEWS</p>
            </div>
          </div>

        </div>
      </div>


       </div>

      </div>


    </div>




    <div className='col-md-4 col-12'>
      <div className='newscard'>
       <div className='newsbox'>
        <img src={news} className='img-fluid'/>

        <div className='caption-news'>
          <h5>Lorem ipsum dolor, consectetur sitadipiscing elit amet</h5>
          <p>Lorem ipsum dolor, consectetur sitadipiscing elit amet</p>

          <div className='read-more'>
            <p> Read More <img src={arrow} className='img-fluid arrowreadmore' /></p>
          </div>
        </div>

      <div className='card-footer'>

        <div className='row'>
          <div className='col-md-6 col-8'>
            <div className='date-news'>
              <p>3 July 2024  &nbsp;&nbsp; | &nbsp;&nbsp; NEWS</p>
            </div>
          </div>

        </div>
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
