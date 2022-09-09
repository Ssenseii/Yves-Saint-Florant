import React from 'react'
import Showcase from '../components/Home/showcase'
import Hero from '../components/Home/hero'


const Home = () => {
  return (
    <div className='home'>
      <Showcase></Showcase>
      <Hero></Hero>
      <Showcase></Showcase>
    </div>
  )
}

export default Home