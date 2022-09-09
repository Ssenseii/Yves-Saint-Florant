import React from 'react'
import Showcase from '../components/Home/showcase'
import Hero from '../components/Home/hero/hero'


const Home = () => {
  return (
    <div className='home'>
      <Showcase></Showcase>
      <Hero></Hero>
    </div>
  )
}

export default Home