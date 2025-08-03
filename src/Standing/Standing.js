import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcumb/Breadcrumb'
import LeaderboardTable from './LeaderboardTable'
import st from '../Stadium.jpg'
export default function Standing() {
  return (
<>

<div className="breadcrumb-container">
      <div className="breadcrumb-overlay">
        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">Standings</h1>
        </div>
      </div>
    </div>


<section id='table-points'>
    

    <LeaderboardTable/>
    </section>
    
    
    <section id='stadium'>
        <img src={st} className='img-fluid'/>
    </section>
    </>
  )
}
