import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import M from "materialize-css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  useEffect(() => {
    M.AutoInit();
  })

  return (
    <nav className="white">
      <div className="nav-wrapper" id="nav-web">
        <ul className="right">
        <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          
          {/* Dropdown Trigger */}
          <li>
            <a className="dropdown-trigger" href="#!" data-target="dropdown">Projects<i className="material-icons right">arrow_drop_down</i></a>
            <ul id="dropdown" className="dropdown-content">
              <li className="nav-item">
                <Link
                  to="/webdevelopment"
                  className={window.location.pathname === "/webdevelopment" ? "nav-link active" : "nav-link"}
                >
                  Web Development
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/interactiveart"
                  className={window.location.pathname === "/interactiveart" ? "nav-link active" : "nav-link"}
                >
                  Interactive Art
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  ); 
};

export default Navbar;