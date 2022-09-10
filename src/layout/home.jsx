import React from 'react'
import Showcase from '../components/Home/showcase'
import Hero from '../components/Home/hero/hero'
import Display from '../components/Home/display'

const Home = () => {
  return (
    <div className='home'>
      <Showcase></Showcase>
      <Hero></Hero>
      <Display></Display>
    </div>
  )
}

export default Home