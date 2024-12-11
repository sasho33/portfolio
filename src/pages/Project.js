import React from 'react';
import BtnGithub from '../components/btnGithub/BtnGithub';

export default function Project({ title, imgBig, skills, githubLink }) {
  return (
    <main class="section">
      <div class="container">
        <div class="project-details">
          <h1 class="title-1">{title} Hello</h1>

          <img src={imgBig} alt={title} class="project-details__cover" />

          <div class="project-details__desc">
            <p>{skills}</p>
          </div>

          <BtnGithub githubLink={githubLink} />
        </div>
      </div>
    </main>
  );
}
