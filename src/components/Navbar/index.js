import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
                to="#home"
              >
                Home
              </Link>
          </li>
          <li className="nav-item">
              <Link
                to="#aboutMe"
              >
                About Me
              </Link>
          </li>
          <li className="nav-item">
              <Link
                to="#pastProjects"
              >
                Past Projects
              </Link>
          </li>
          <li className="nav-item">
              <Link
                to="#contact"
              >
                Contact
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  ); 
};

export default Navbar;