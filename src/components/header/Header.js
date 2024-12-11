import React from 'react';
import './style.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__wraper">
        <h1 className="header__title">
          <strong>
            My name is <em>Oleksandr</em>
          </strong>
          <br></br>
          and I am a Fullstack Developer
        </h1>
        <div className="header__text">
          <p>with a passion for creating beautiful and functional user experiences. </p>
          <p>
            I have a strong foundation in web development and I specialize in creating dynamic and
            responsive websites and applications.
          </p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}
