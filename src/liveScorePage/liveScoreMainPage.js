import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcumb/Breadcrumb'
import LiveScore from './liveScore'
import st from '../Stadium.jpg'
export default function PointTableBanner() {
  return (
<>

<div className="breadcrumb-container">
      <div className="breadcrumb-overlay">
        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">Live Matches Score</h1>
        </div>
      </div>
    </div>


<section id='table-points'>
    

    <LiveScore/>
    </section>
    
    
    <section id='stadium'>
        <img src={st} className='img-fluid'/>
    </section>
    </>
  )
}