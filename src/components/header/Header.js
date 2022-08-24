import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  let [activeClass, setActiveClass] = useState(0);

  return (
    <div className="header-area sticky-top">
      <div className="header-sec">
        <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand h5 m-0" href="#1">
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className={` active1  navLink ${
                  activeClass === 0 && "activate"
                }`}
                aria-current="page"
                href="#home"
                onClick={() => {
                  setActiveClass(0);
                }}
              >
                Home
              </a>
              <a
                className={` active1  navLink ${
                  activeClass === 1 && "activate"
                }`}
                href="#about"
                onClick={() => {
                  setActiveClass(1);
                }}
              >
                About
              </a>
              <a
                className={` active1  navLink ${
                  activeClass === 2 && "activate"
                }`}
                href="#skills"
                onClick={() => {
                  setActiveClass(2);
                }}
              >
                Skills
              </a>
              <a
                className={` active1  navLink ${
                  activeClass === 3 && "activate"
                }`}
                href="#projects"
                onClick={() => {
                  setActiveClass(3);
                }}
              >
                Work
              </a>
              <a
                className={` active1  navLink ${
                  activeClass === 4 && "activate"
                }`}
                href="#1"
                onClick={() => {
                  setActiveClass(4);
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
