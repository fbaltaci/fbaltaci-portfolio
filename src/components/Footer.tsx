import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Fehmi Baltaci</strong>{" "}
            <span>
              All Rights Reserved
              <br />
            </span>
          </p>
        </div>

        <nav className="social-links d-flex justify-content-center" aria-label="Social media">
          <a
            href="https://linkedin.com/in/fehmibaltaci"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile">
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/fbaltaci"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile">
            <i className="bi bi-github"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
