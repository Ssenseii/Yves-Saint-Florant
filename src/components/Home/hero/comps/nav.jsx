import React, { useState } from "react";
import Tag from "./tags";

import {
  UserCircleIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";



const Nav = () => {
  
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
    <nav id="nav" className={Fix ? 'nav fixed' : 'nav'}>
      <div className="nav__logo">
        <h1>Dravida</h1>
      </div>

      <div className="nav__elements">
        <Tag name="Home" link="index.html" />
        <Tag name="Prints" link="index.html" />
        <Tag name="Original Art" link="index.html" />
        <Tag name="Commissions" link="index.html" />
        <Tag name="Merchandise" link="index.html" />
        <Tag name="FAQs" link="index.html" />
        <Tag name="Contact us" link="index.html" />
      </div>

      <div className="nav__buttons">
        <button>
          <MagnifyingGlassIcon></MagnifyingGlassIcon>
        </button>
        <button>
          <UserCircleIcon></UserCircleIcon>
        </button>
        <button>
          <ShoppingCartIcon></ShoppingCartIcon>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
