import React from 'react';
import './style.css';

import project1 from '../../img/projects/01.jpg';

export default function Project() {
  return (
    <li className="Project">
      <a href="./project-page.html">
        <img src={project1} alt="Project img" className="project__img" />
        <h3 className="project__title">Gaming streaming portal</h3>
      </a>
    </li>
  );
}
