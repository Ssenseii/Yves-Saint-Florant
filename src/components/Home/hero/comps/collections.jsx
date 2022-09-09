import React, {useState} from 'react'
import images from '../../../../constant/images'

const Collections = () => {
  const [Fix, setFix] = useState(false)

  function setFixed(){
    if (window.scrollY >= 850){
      setFix(true)
    }
    else{
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed)

  return (
    <div className={Fix ? 'collections margin' : 'collections'}>
      <div className="collections__element">
        <img src={images.morgue} alt="cars" />
        <div className='collections__element-overlay'></div>
        <h2>Art</h2>
      </div>
      <div className="collections__element">
        <img src={images.tattoo} alt="cars" />
        <div className='collections__element-overlay'></div>
        <h2>Commissions</h2>
      </div>
      <div className="collections__element">
        <img src={images.sushi} alt="cars" />
        <div className='collections__element-overlay'></div>
        <h2>Original Art</h2>
      </div>
      <div className="collections__element">
        <img src={images.cars} alt="cars" />
        <div className='collections__element-overlay'></div>
        <h2>Merchandise</h2>
      </div>

    </div>
  )
}

export default Collections