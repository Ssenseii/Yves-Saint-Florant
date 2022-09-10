import React from 'react'
import images from '../../constant/images'

const Display = () => {
  return (
    <div className='home__display'>

    <div className='home__display-title'>
      <h1>Originals</h1>
    </div>
    
      <div className='grid'>
        <div className="grid__element">
          <img src={images.p1} alt="" />
        </div>
        <div className="grid__element">
          <img src={images.p2} alt="" />
        </div>
        <div className="grid__element">
          <img src={images.p3} alt="" />
        </div>
        <div className="grid__element">
          <img src={images.p4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Display