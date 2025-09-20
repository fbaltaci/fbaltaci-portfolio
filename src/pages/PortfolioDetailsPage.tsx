import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS_DATA } from "../constants";

/**
 * Individual project details page component
 * Displays comprehensive information about a specific project
 */
const PortfolioDetailsPage: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS_DATA.find((p) => p.id === Number(id));

  if (!project) return <div className="text-center py-5">Project not found</div>;

  return (
    <main className="main portfolio-details-page">
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8">
              {project.images.map((img, index) => (
                <div key={index} className="mb-4">
                  <img src={img} alt={`${project.title} ${index + 1}`} className="img-fluid rounded shadow-sm" />
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                <h3>Project Information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {project.category}
                  </li>
                  <li>
                    <strong>Tools</strong>: {project.tools.join(", ")}
                  </li>
                  <li>
                    <strong>Project Date</strong>: {project.date}
                  </li>
                  {project.live && (
                    <li>
                      <strong>Live Site</strong>:{" "}
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        {project.live}
                      </a>
                    </li>
                  )}
                  {project.repo && (
                    <li>
                      <strong>GitHub Repo</strong>:{" "}
                      <a href={project.repo.url} target="_blank" rel="noopener noreferrer">
                        {project.repo.label}
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div className="portfolio-description mt-4" data-aos="fade-up" data-aos-delay="300">
                <h4>What this project solves:</h4>
                <p>{project.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetailsPage;
