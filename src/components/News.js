import React from 'react'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/news3.jpg'
import news4 from '../images/news4.jpg'
import news5 from '../images/news5.jpg'
import news6 from '../images/news6.jpg'
import news7 from '../images/news7.jpg'
import arrow from '../arrow.png'
export default function News() {
  return (
    <>

      <div className="breadcrumb-container  " >
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
                  <img src={news1} className='img-fluid' />

              


                </div>

              </div>


            </div>


            <div className='col-md-4 col-12'>
              <div className='newscard'>
                <div className='newsbox'>
                  <img src={news2} className='img-fluid' />

             

                </div>

              </div>


            </div>




            <div className='col-md-4 col-12'>
              <div className='newscard'>
                <div className='newsbox'>
                  <img src={news3} className='img-fluid' />

            

                </div>

              </div>


            </div>


             <div className='col-md-4 col-12'>
              <div className='newscard'>
                <div className='newsbox'>
                  <img src={news4} className='img-fluid' />

            

                </div>

              </div>


            </div>




 <div className='col-md-4 col-12'>
              <div className='newscard'>
                <div className='newsbox'>
                  <img src={news5} className='img-fluid' />

            

                </div>

              </div>


            </div>






 <div className='col-md-4 col-12'>
              <div className='newscard'>
                <div className='newsbox'>
                  <img src={news7} className='img-fluid' />

            

                </div>

              </div>


            </div>

          </div>
        </div>
      </section>





    </>
  )
}
