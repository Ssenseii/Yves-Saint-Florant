import React from "react";

const Tag = (props) => {
  return (
    <div className="nav__elements-tags">
      <a href={props.link}>
        {props.name}
      </a>
      <div />
    </div>
  );
};

export default Tag;
