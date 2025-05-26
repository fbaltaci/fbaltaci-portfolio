import React from "react";
import { useParams } from "react-router-dom";

const projectData = [
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
    repo: "https://github.com/fehmibaltaci/simple-dashboard",
    live: "https://team-dashboard.onrender.com",
    category: "QA Analytics Dashboard",
    date: "April 2024",
  },
];

const PortfolioDetailsPage: React.FC = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === Number(id));

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
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        {project.repo}
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div className="portfolio-description mt-4" data-aos="fade-up" data-aos-delay="300">
                <h4>What this project solves:</h4>
                <p>
                  The dashboard helps QA and DevOps teams monitor test performance across environments. It simplifies
                  debugging, exposes trends with graphs, and organizes logs in a readable format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetailsPage;
