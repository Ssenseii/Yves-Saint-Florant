import React from "react";
import Nav from "./comps/nav"
import Collections from "./comps/collections"

const Hero = () => {
  return (

    <main className="home__hero">
      <Nav></Nav>
      <Collections></Collections>
    </main>
  );
};

export default Hero;
