import React, { Fragment } from "react";
import { Link, Nav } from "./styles.jsx";

const Navbar = () => {
  return (
    <Fragment>
      <Nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <ul className="navbar-nav">
            <li>
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/aboutme" className="nav-link">
                Acerca de mi
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contáctame
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link">
                Blog personal
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
