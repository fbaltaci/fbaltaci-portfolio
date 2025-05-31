import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Test Results Dashboard",
    description:
      "A web-based dashboard built with Dash and Plotly to visualize test results across multiple environments and tenants.",
    tools: ["Python", "Dash", "Plotly", "Pandas", "CSV", "Bootstrap", "HTML", "CSS"],
    images: [
      "/assets/projects/dashboard-project/home-page.png",
      "/assets/projects/dashboard-project/historical-page.png",
      "/assets/projects/dashboard-project/logs-page.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fehmibaltaci/simple-dashboard"
    },
    live: "https://team-dashboard.onrender.com",
  },
  {
    id: 2,
    title: "Behave API Automation Framework",
    description:
      "An API automation framework using Behave (BDD), validating ToolsQA BookStore APIs with Allure reports and Gherkin scenarios.",
    tools: ["Python", "Behave", "Gherkin", "Requests", "Allure", "Dotenv"],
    images: [
      "/assets/projects/behave-api-automation-project/allure-report.png",
      "/assets/projects/behave-api-automation-project/feature-file.png",
      "/assets/projects/behave-api-automation-project/api-helper-file.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/behave_automation_framework"
    },
    live: "", // no live site needed for frameworks
    category: "API Automation Framework",
    date: "May 2024",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <main className="main portfolio-page">
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Here are a few of my featured projects with screenshots and tech stack highlights.</p>
        </div>

        <div className="container">
          <div className="row gy-5" data-aos="fade-up" data-aos-delay="200">
            {projects.map((project) => (
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
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
