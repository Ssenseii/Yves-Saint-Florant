import React from 'react'
import images from '../../constant/images'

const Showcase = () => {
  return (
    <>
      <div className="home__showcase">
        <img src={images.showcase} alt="art-showcase" />
        <div className='home__showcase-title'>
          <h1>BRING ART BACK INTO YOUR LIFE</h1>
        </div>
      </div>
    </>
  );
}

export default Showcase