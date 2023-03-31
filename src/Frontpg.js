import React from 'react'
import imgs from './In no time-pana.png'
import Carditem from './Carditem'
const Frontpg = () => {
  return (
    <>
    <div className="full">
    <div id = "main">
      <div className="header-heading">
        <h1>Let's localize the disrupted <span>market</span></h1>
        <img src={imgs} alt="" srcset="" />
      </div>
      
    </div>
    <Carditem/>
    </div>
    </>
  )
}

export default Frontpg;
