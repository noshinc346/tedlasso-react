import React from 'react'

function Home() {
  return (
    <div className='homeContainer'>
      <img className='homeBackground' src='https://thumb.canalplus.pro/http/unsafe/2880x1620/filters:quality(80)/media.prod.hawc.canal.aws.io-cplus.net/edb40890d52074dcccb82df05e1c91a2.jpg' />
      <div className='textContainer'>
        <h1 className='homeTitle'>You Fool!</h1>
        <h2 className='homeText'>We only provide <br/> Ted Lasso Content</h2>
      </div>
    </div>
  )
}

export default Home