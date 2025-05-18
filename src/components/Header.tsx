import React, { useEffect, useState } from "react";

interface HeaderProps {
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme }) => {
  const [themeClass, setThemeClass] = useState("light-theme-navbar");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setThemeClass(savedTheme === "dark" ? "dark-theme-navbar" : "light-theme-navbar");
  }, []);

  return (
    <header id="header" className={`header d-flex align-items-center sticky-top ${themeClass}`}>
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Fehmi Baltaci</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="header-social-links d-flex align-items-center">
          <a href="https://linkedin.com/in/fehmi-baltaci" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/fehmibaltaci" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <button onClick={onToggleTheme} className="btn btn-sm btn-outline-secondary ms-3">
            Toggle Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
