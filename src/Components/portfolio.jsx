import React from "react";
import data from "../data.json";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="heading">MY PORTFOLIO</h1>
      <ul id="myportfolio" data-aos="fade-up">
        {data.map((project) => {
          return (
            <li key={project.id}>
              <div
                className="project"
                style={{
                  width: "25rem",
                  objectFit: "contain",
                  borderRadius: "5px",
                }}
              >
                <div className="container">
                  <img src={project.background_image} alt={project.name} />
                </div>
                <div className="topPro">
                  <h2>{project.name}</h2>
                  <p>Published on. {project.published_date}</p>
                </div>
                <p>{project.description}</p>
                <div className="botPro">
                  <div className="butbotpro">
                    <button>
                      <a
                        href={project.ghpages}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </button>
                    <button className="github">
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code source
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
