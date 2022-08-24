import React from "react";
import "./about.css";
import p1 from "../../assets/img/pic1.JPG";

const About = () => {
  return (
    <div className="about-area" id="about">
      <div className="about-sec">
        <h1 className="text-capitalize text-center text-primary">about</h1>

        <div className="about-row-1 row mt-5 gx-md-5 gy-5">
          <div className="about-col-1 col-md-6 col-12">
            <div className="about-img-container">
              <img src={p1} className="about-img" alt="" />
            </div>
          </div>
          <div className="about-col-2 col-md-6 col-12">
            <div className="about-profile">
              <div className="about-profile-1">
                <h1 className="text-center">I am Gokul</h1>
                <h5 className="text-muted text-center about-details">
                  FrontEnd Web Developer with good working knowledge in HTML,
                  CSS , JAVASCRIPT , REACT JS, REDUX , BOOTSTRAP. Builded few
                  Projects like Netflix clone, Amazon Clone.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
