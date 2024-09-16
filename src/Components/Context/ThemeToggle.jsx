import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>
        Ấn dô tui {theme === 'light' ? 'dark' : 'light'} 
      </button>
      <div className={`themed-component ${theme}`}>
        <p> {theme} </p>
      </div>
    </>
  );
};
