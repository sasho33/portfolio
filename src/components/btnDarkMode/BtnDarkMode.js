import React, { useEffect, useRef } from 'react';
import detectDarkMode from '../../utils/detectDarkMode';
import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';
import { useLocalStorage } from '../../utils/useLocallStorage';

export default function BtnDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode);
  const btnRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode((current) => {
      return current === 'light' ? 'dark' : 'light';
    });
  };

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light';
      setDarkMode(newColorScheme);
    });
  }, [setDarkMode]);

  return (
    <button ref={btnRef} onClick={toggleDarkMode} className="dark-mode-btn">
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
