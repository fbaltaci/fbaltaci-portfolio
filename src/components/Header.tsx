import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../constants";

interface HeaderProps {
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme }) => {
  const [themeClass, setThemeClass] = useState("light-theme-navbar");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setThemeClass(savedTheme === "dark" ? "dark-theme-navbar" : "light-theme-navbar");
  }, []);

  const handleAnchorClick = (anchor: string) => {
    if (location.pathname !== "/") {
      // Navigate to home and then scroll after load
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // small delay to let LandingPage render
    } else {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header" className={`header d-flex align-items-center sticky-top ${themeClass}`}>
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">{PERSONAL_INFO.NAME}</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <button onClick={() => handleAnchorClick("hero")} className="nav-link-button">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleAnchorClick("about")} className="nav-link-button">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleAnchorClick("resume")} className="nav-link-button">
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => handleAnchorClick("portfolio")} className="nav-link-button">
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleAnchorClick("contact")} className="nav-link-button">
                Contact
              </button>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="header-social-links d-flex align-items-center">
          <a href={SOCIAL_LINKS.LINKEDIN.URL} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={SOCIAL_LINKS.GITHUB.URL} target="_blank" rel="noopener noreferrer">
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
