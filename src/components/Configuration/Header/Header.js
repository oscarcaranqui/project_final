import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className={`navbar ${theme}`}>
      <h1 onClick={handleLogoClick} style={{cursor: 'pointer'}}>Explora Calidad y Conveniencia en la Tienda de Autos</h1>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </button>
    </nav>
  );
};

export default Header;
