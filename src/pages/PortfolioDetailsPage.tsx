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
    repo: {
      label: "GitHub",
      url: "https://github.com/fehmibaltaci/simple-dashboard",
    },
    live: "https://team-dashboard.onrender.com",
    category: "QA Analytics Dashboard",
    date: "April 2024",
    details:
      "This dashboard provides a visual representation of test results, helping teams identify trends, track performance, and quickly access logs for debugging. It simplifies the process of monitoring and analyzing test outcomes, ultimately leading to improved software quality and faster issue resolution.",
  },
  {
    id: 2,
    title: "Behave API Automation Framework",
    description:
      "An API automation framework using Behave (BDD), designed to test the ToolsQA BookStore API with Gherkin-based scenarios and Allure reporting.",
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
    live: "", // no live version for beahve api automation frameworks
    category: "API Test Automation",
    date: "May 2024",
    details:
      "This project provides a modular, scalable test automation framework built in Python using the Behave library. It supports Gherkin-based scenarios and is integrated with Allure for beautiful test reports. The framework includes helper utilities, environment configs, and detailed logging, making it easy to run tests against API endpoints such as login, user creation, and book management.",
  },
  {
    id: 3,
    title: "Java Cucumber API Automation Framework",
    description:
      "A BDD API testing framework using Java, Cucumber, and RestAssured to validate ToolsQA Book Store APIs with Gherkin steps and Allure reports.",
    tools: ["Java", "Cucumber", "RestAssured", "JUnit", "Allure", "Gherkin"],
    images: [
      "/assets/projects/cucumber-automation-framework/reporting.png",
      "/assets/projects/cucumber-automation-framework/feature-file.png",
      "/assets/projects/cucumber-automation-framework/api-helper-class.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/cucumber_automation_framework",
    },
    live: "",
    category: "API Automation Framework",
    date: "June 2024",
    details:
      "This Java-based API automation framework uses Cucumber for BDD and RestAssured for API testing. It includes Gherkin feature files, step definitions, and Allure reporting for comprehensive test results. The framework is designed to be modular and easily extensible, allowing for the addition of new API endpoints and test scenarios.",
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
      "A test automation framework built with Java, Selenium WebDriver, Cucumber, and TestNG to automate UI tests for the DemoQA website.",
    tools: ["Java", "Selenium", "Cucumber", "TestNG", "WebDriverManager", "Maven", "Gherkin"],
    images: [
      "/assets/projects/selenium-demoqa-framework/home-page-step.png",
      "/assets/projects/selenium-demoqa-framework/page-object.png",
      "/assets/projects/selenium-demoqa-framework/testng-runner.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/cucumber-selenium-demoqa",
    },
    live: "",
    category: "UI Automation Framework",
    date: "June 2024",
    details:
      "This project automates user interface testing for the DemoQA website using Selenium WebDriver with the Cucumber BDD approach. It includes page objects for maintainability, a shared driver factory, and TestNG-based runners for structured execution. HTML reports are generated after each test run for easy results tracking and debugging.",
  },
  {
    id: 6,
    title: "Cucumber Selenium Sauce Labs UI Automation",
    description:
      "A Selenium-based UI automation framework using Java and Cucumber to test the Sauce Labs demo app cross-browser via Sauce cloud infrastructure.",
    tools: ["Java", "Selenium", "Cucumber", "TestNG", "WebDriverManager", "Maven", "Sauce Labs", "Gherkin"],
    images: [
      "/assets/projects/sauce-labs-framework/login-test.png",
      "/assets/projects/sauce-labs-framework/sauce-dashboard.png",
      "/assets/projects/sauce-labs-framework/test-runner.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/cucumber-selenium-saucelabs",
    },
    live: "",
    category: "UI Automation Framework",
    date: "June 2024",
    details:
      "This project automates UI testing for the Sauce Labs demo app using Selenium WebDriver and Cucumber with Gherkin syntax. The framework supports remote execution on Sauce Labs for cross-browser and cross-platform testing. It includes reusable step definitions, a page object model, TestNG runners, and cloud-based parallel execution with reporting.",
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
