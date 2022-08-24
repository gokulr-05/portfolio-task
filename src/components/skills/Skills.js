import React from "react";
import "./skills.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="skills-area mb-5" id="skills">
      <div className="skills-sec">
        <h1 className="text-center text-primary">Skills</h1>

        <div className="skills-bucket">
          <div className="skills-bucket-1 row g-5 p-4">
            <div className="skills-item col-md-6">
              <BsCheckCircleFill size="25px" color="green" />
              <h5 className="m-0 text-center">HTML</h5>
            </div>
            <div className="skills-item col-md-6">
              <BsCheckCircleFill size="25px" color="green" />
              <h5 className="m-0 text-center">CSS</h5>
            </div>
            <div className="skills-item col-md-6">
              <BsCheckCircleFill
                className="check-box"
                size="25px"
                color="green"
              />
              <h5 className="m-0 text-center">BOOTSTRAP</h5>
            </div>
            <div className="skills-item col-md-6">
              <BsCheckCircleFill
                className="check-box"
                size="25px"
                color="green"
              />
              <h5 className="m-0 text-center">JAVASCRIPT</h5>
            </div>
            <div className="skills-item col-md-6">
              <BsCheckCircleFill size="25px" color="green" />
              <h5 className="m-0 text-center">REACT JS</h5>
            </div>
            <div className="skills-item col-md-6">
              <BsCheckCircleFill size="25px" color="green" />
              <h5 className="m-0 text-center">REDUX</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
