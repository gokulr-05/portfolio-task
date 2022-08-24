import React from "react";
import "./home.css";
import "boxicons";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import pic1 from "../../assets/img/pic1.JPG";
import pic2 from "../../assets/img/pic2.jpg";
import pic3 from "../../assets/img/pic3.jpg";

const Home = () => {
  return (
    <div className="home-area" id="home">
      <div className="home-sec">
        {/* row 1 */}
        <div className="home-row-1 row w-100">
          {/* col 1 */}
          <div className="home-col-1 col-md-6 col-12">
            <h1>
              <p className="home-heading">Hi,</p>
              <p className="home-heading">
                I am <span className="home-heading text-primary">Gokul </span>
              </p>
              <p className="home-heading">Web Developer </p>
            </h1>

            <div className="home-btn-container">
              <button className="btn btn-primary text-capitalize mt-3 px-4">
                <strong className="m-0 ">Contact</strong>
              </button>
            </div>

            <div className="home-social-icons ">
              <a
                href="https://www.linkedin.com/in/gokul-r-66900a1b6/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin color="blue" size="27px" />
              </a>
              <a
                href="https://github.com/gokulr-05"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub color="black" size="27px" />
              </a>
            </div>
          </div>
          {/* col 2 */}
          <div className="home-col-2 col-md-6 col-12">
            <div className="home-img-container">
              <img src={pic1} className="home-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
