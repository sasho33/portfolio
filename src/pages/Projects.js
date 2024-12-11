import React from 'react';



export default function Projects() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img src={project1} alt="Project img" className="project__img" />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={project2} alt="Project img" className="project__img" />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src={project3} alt="Project img" className="project__img" />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>

            <li className="project">
              <img src={project4} alt="Project img" className="project__img" />
              <h3 className="project__title">Dating app</h3>
            </li>
            <li className="project">
              <img src={project5} alt="Project img" className="project__img" />
              <h3 className="project__title">Landing</h3>
            </li>
            <li className="project">
              <img src={project6} alt="Project img" className="project__img" />
              <h3 className="project__title">Gaming community</h3>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
