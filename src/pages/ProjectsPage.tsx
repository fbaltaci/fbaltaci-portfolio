import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce web application featuring product listings, cart, and checkout functionalities.",
    tools: ["Angular", "TypeScript", "Bootstrap"],
    image: "./assets/projects/project.jpg",
  },
  {
    id: 2,
    title: "Test Automation Dashboard",
    description: "A dashboard to visualize automated test results, performance charts, and CI/CD integrations.",
    tools: ["React", "Chart.js", "Jenkins", "Sass"],
    image: "./assets/projects/project.jpg",
  },
  {
    id: 3,
    title: "Portfolio Site",
    description: "A responsive personal website to showcase my work, resume, and contact information.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    image: "./assets/projects/project.jpg",
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded shadow-sm"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <p>
                    <strong>Tools:</strong> {project.tools.join(", ")}
                  </p>
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
