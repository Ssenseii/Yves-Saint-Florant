import React from "react";
import { motion } from "framer-motion";
import images from '../../constant/images'

const Hero = () => {
  return (
    <main className="home__hero">
      <nav className="nav">
        <img className="nav__logo" src={images.logo} alt="logo" />

        <div className="nav__elements"></div>

        <div className="nav__buttons"></div>
      </nav>
    </main>
  );
};

export default Hero;
