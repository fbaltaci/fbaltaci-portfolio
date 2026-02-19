import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PAGE_CONTENT, PROJECTS_DATA } from "../constants";

/**
 * Projects section component displaying portfolio projects in a grid layout
 */
const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"SE" | "QA">("SE");

  const filteredProjects = PROJECTS_DATA.filter((project) => project.type === activeTab);

  return (
    <main className="main portfolio-page">
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{PAGE_CONTENT.PORTFOLIO.TITLE}</h2>
          <p>{PAGE_CONTENT.PORTFOLIO.SUBTITLE}</p>
        </div>

        <div className="container">
          {/* Tabs Navigation */}
          <div className="d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-delay="100">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "SE" ? "active" : ""}`}
                  onClick={() => setActiveTab("SE")}
                  style={{ cursor: "pointer" }}>
                  Software Engineering
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "QA" ? "active" : ""}`}
                  onClick={() => setActiveTab("QA")}
                  style={{ cursor: "pointer" }}>
                  Quality Assurance
                </button>
              </li>
            </ul>
          </div>

          {/* Projects Content */}
          {activeTab === "SE" ? (
            <div className="text-center py-5">
              <h3>Coming Soon</h3>
              <p className="text-muted">Software Engineering projects will be added soon.</p>
            </div>
          ) : (
            <div className="row gy-5">
              {filteredProjects.map((project) => (
                <div className="col-12 d-md-flex align-items-center gap-4" key={project.id}>
                  <div className="col-md-6">
                    <Link to={`/portfolio/${project.id}`}>
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="img-fluid rounded shadow-sm"
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <p>
                      <strong>Tools:</strong> {project.tools.join(", ")}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to={`/portfolio/${project.id}`} className="btn btn-outline-primary">
                        View Details
                      </Link>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-success">
                          Live Demo
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark">
                          {project.repo.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
