import React from 'react'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='landingPage'>
      <div className='leftLanding'>
        <h1 className='serviceName'>&Chill</h1>
        <p className='serviceLine'>Stream your favorite shows online.</p>
        <Link to="/home">
          <button className='watchButton'>WATCH</button>
        </Link>
        <p className='serviceCancelLine'>Watch anywhere. Cancel anytime.</p>
      </div>
      <div className='rightLanding'>
        <p>HELLO</p>
        <p>HELLO</p>
        <p>HELLO</p>

      </div>
    </div>
  )
}

export default Landing