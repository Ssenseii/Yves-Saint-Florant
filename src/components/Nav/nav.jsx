import React from "react";
import Tag from "./tags";

import {
  UserCircleIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <nav className="nav">
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
