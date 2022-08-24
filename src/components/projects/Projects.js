import React from "react";
import "./projects.css";
import p1 from "../../assets/img/netflix.png";
import p2 from "../../assets/img/amazon.png";

let Projects = function () {
  return (
    <div className="projects-area mb-5" id="projects">
      <div className="projects-sec">
        <h1 className="text-center text-primary">Projects</h1>
        {/* row  */}
        <div className="projects-row">
          <div className="project-card">
            <img src={p1} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center py-3">Netflix Clone</h5>

              <div className="d-flex align-items-center justify-content-center gap-3">
                <a
                  href="https://github.com/gokulr-05/netflix-clone"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary "
                >
                  Code
                </a>
                <a
                  href="https://netflix-clone-gokul-1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary "
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={p2} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center py-3">Amazon Clone</h5>

              <div className="d-flex align-items-center justify-content-center gap-3">
                <a
                  href="https://github.com/gokulr-05/amazon-clone"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Code
                </a>
                <a
                  href="https://amazon-clone-gokul.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
