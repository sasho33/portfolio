import React from 'react';

import './style.css';
import githubIcon from './gitHub-black.svg';

export default function BtnGithub({ githubLink }) {
  return (
    <a href={githubLink} target="_blank" rel="noreferrer" class="btn-outline">
      <img src={githubIcon} alt="" />
      GitHub repo
    </a>
  );
}
