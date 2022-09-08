import React from 'react'
import images from '../../constant/images'
import {motion} from "framer-motion"

const Showcase = () => {
  return (
    <>
      <div className="home__showcase">
        <img src={images.showcase} alt="art-showcase" />
        <div className='home__showcase-title'>
          <motion.h1 whileInView={{x: [300, 0], opacity: [0, 1]}}>BRING ART BACK INTO YOUR LIFE</motion.h1>
        </div>
      </div>
    </>
  );
}

export default Showcase