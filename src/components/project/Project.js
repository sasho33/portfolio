import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export default function Project({ title, img, index }) {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="Project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
}
