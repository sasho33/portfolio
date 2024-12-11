import React from 'react';
import './style.css';

export default function Project({ title, img }) {
  return (
    <li className="Project">
      <a href="./project-page.html">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
}
