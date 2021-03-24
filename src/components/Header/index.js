import React from "react";

//Import css
import "./style.css";

function Header ({title, subtitle}) {
  return (
    <div id="name-container">
      <h4>{title}</h4>
      <h6>{subtitle}</h6>
    </div>
  );
};

export default Header;