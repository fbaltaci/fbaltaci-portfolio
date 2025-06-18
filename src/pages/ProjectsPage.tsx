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
      url: "https://github.com/fehmibaltaci/simple-dashboard",
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
      url: "https://github.com/fbaltaci/behave_automation_framework",
    },
    live: "", // no live site needed for frameworks
    category: "API Automation Framework",
    date: "May 2024",
  },
  {
    id: 3,
    title: "Java Cucumber API Automation Framework",
    description:
      "A BDD API testing framework using Java, Cucumber, and RestAssured to validate ToolsQA Book Store APIs with Gherkin steps and Allure reports.",
    tools: ["Java", "Cucumber", "RestAssured", "JUnit", "Allure", "Gherkin"],
    images: [
      "/assets/projects/cucumber-automation-framework/reports-file.png",
      "/assets/projects/cucumber-automation-framework/feature-file.png",
      "/assets/projects/cucumber-automation-framework/api-helper-class.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/cucumber_automation_framework",
    },
    live: "", // no live site needed for frameworks
    category: "API Automation Framework",
    date: "June 2024",
  },
  {
    id: 4,
    title: "Postman API Collection BookStore Automation",
    description:
      "A fully automated Postman test suite for the ToolsQA BookStore API. Covers login, token generation, and book management with dynamic user creation, environment variables, pre-request/test scripts, and Newman support.",
    tools: ["Postman", "Newman", "JavaScript", "Chai Assertion", "REST API"],
    images: [
      "/assets/projects/postman-api-collection/collection-structure.png",
      "/assets/projects/postman-api-collection/test-script-sample.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/BookStore-API-Collection",
    },
    live: "", // No live app for Postman collection
    category: "API Test Automation",
    date: "July 2024",
  },
  {
    id: 5,
    title: "Java Selenium UI Automation Framework for DemoQA",
    description:
      "A test automation framework built with Java, Selenium WebDriver, Cucumber, and TestNG to automate UI tests for the DemoQA website. Follows the Page Object Model design and supports HTML reporting, driver reuse, and clean test organization.",
    tools: ["Java", "Selenium", "Cucumber", "TestNG", "WebDriverManager", "Maven", "Gherkin"],
    images: [
      "/assets/projects/java-selenium-demoqa/reports-file.png",
      "/assets/projects/java-selenium-demoqa/feature-file.png",
      "/assets/projects/java-selenium-demoqa/textbox-page-file.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/cucumber-selenium-demoqa",
    },
    live: "",
    category: "UI Automation Framework",
    date: "June 2024",
  },
  {
    id: 6,
    title: "Cucumber Selenium Sauce Labs UI Automation",
    description:
      "A Selenium-based UI automation framework using Java and Cucumber to test the Sauce Labs demo app cross-browser via Sauce cloud infrastructure.",
    tools: ["Java", "Selenium", "Cucumber", "TestNG", "WebDriverManager", "Maven", "Sauce Labs", "Gherkin"],
    images: [
      "/assets/projects/cucumber-selenium-framework/report-file.png",
      "/assets/projects/cucumber-selenium-framework/login-page-file.png",
      "/assets/projects/cucumber-selenium-framework/login-feature-file.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/cucumber-selenium-framework",
    },
    live: "",
    category: "UI Automation Framework",
    date: "June 2024",
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
