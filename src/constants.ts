import { ContactInfo } from "./models/Contact";
import { Education } from "./models/Education";
import { Experience } from "./models/Experience";
import { Project } from "./models/Project";

export const SOCIAL_LINKS = {
  LINKEDIN: { USERNAME: "fehmi-baltaci", URL: "https://linkedin.com/in/fehmi-baltaci" },
  GITHUB: { USERNAME: "fbaltaci", URL: "https://github.com/fbaltaci" },
} as const;

export const PERSONAL_INFO = {
  NAME: "Fehmi Baltaci",
  EMAIL: "fehmibalt@gmail.com",
  PHONE: "617-850-5304",
  LOCATION: "United States (Open to remote & relocation)",
  WEBSITE: "https://fehmibaltaci.dev",
  TITLE: "Software Engineer",
  TAGLINE: "Full-stack Software Engineer with a strong experience in automation and CI/CD.",
  DESCRIPTION:
    "Experienced in full-stack development and test automation with a track record of building robust applications and tools used across engineering teams.",
  CURRENT_ROLE:
    "Software Engineer II at Advisor360, delivering Angular frontends and Python (Flask/FastAPI) services with Redis and CI/CD (GitHub Actions, Jenkins).",
} as const;

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "bi bi-telephone",
    title: "Call Me",
    text: PERSONAL_INFO.PHONE,
    delay: 200,
  },
  {
    icon: "bi bi-linkedin",
    title: "LinkedIn",
    text: SOCIAL_LINKS.LINKEDIN.USERNAME,
    link: SOCIAL_LINKS.LINKEDIN.URL,
    delay: 250,
  },
  {
    icon: "bi bi-envelope",
    title: "Email Me",
    text: PERSONAL_INFO.EMAIL,
    delay: 300,
  },
] as const;

export const PAGE_CONTENT = {
  ABOUT: {
    TITLE: "About",
    SUBTITLE: PERSONAL_INFO.TAGLINE,
  },
  PORTFOLIO: {
    TITLE: "Projects",
    SUBTITLE: "Selected engineering work and internal tooling that improve reliability and developer workflows.",
  },
  CONTACT: {
    TITLE: "Contact",
    SUBTITLE: "Open to roles and collaborations reach out anytime!",
  },
} as const;

export const EXPERIENCE_CONTENT = {
  TITLE: "Experience",
  SUBTITLE:
    "Results-driven Software Engineer with strong QA background, skilled in building full-stack applications and automation frameworks using modern technologies.",
  SUMMARY: {
    DESCRIPTION:
      "Full Stack Software Engineer with experience in front-end (Angular), back-end (Flask, Falcon), automation frameworks, and QA tooling. Passionate about building scalable, testable systems and UI dashboards.",
  },
  EDUCATION: [
    {
      title: "MS in Software Development",
      period: "2023 - 2025",
      institution: "Boston University",
    },
    {
      title: "Bachelor's in Engineering",
      institution: "Bilecik University",
    },
  ] as Education[],
  EXPERIENCE: [
    {
      title: "Software Engineer II",
      company: "Advisor360",
      period: "11/2022 – Present",
      bullets: [
        "Develop Angular UI components and Flask/FastAPI backend services for enterprise financial applications.",
        "Design scalable APIs and manage Redis caching to support complex test result workflows and high-performance data flows.",
        "Implement unit, integration, and end-to-end tests with Jest, Pytest, and Playwright to ensure reliability and maintainability.",
        "Enhance CI/CD pipelines with GitHub Actions and Jenkins, improving deployment stability and reducing release cycle time.",
        "Build data dashboards with Pandas and Plotly to provide visibility into system metrics and platform health.",
        "Collaborate with UX, QA, and product teams to deliver production-ready features in Agile sprints.",
        "Mentor junior developers, contribute to code reviews, and champion best practices for clean, maintainable code.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Aliaswire",
      period: "07/2021 - 11/2022",
      bullets: [
        "Built and maintained React applications with a focus on performance and maintainability, leveraging Vite for fast builds.",
        "Integrated AWS services (S3, Lambda) and implemented MongoDB and Redis for data storage and caching solutions.",
        "Developed a custom automation framework with Java, Selenium, Cucumber, and RestAssured, covering 250+ API and UI tests.",
        "Automated regression, smoke, and security test suites, improving release quality and reducing manual effort.",
        "Containerized services using Docker and collaborated on Kubernetes deployments to production environments.",
        "Validated APIs and UI workflows with Postman, BrowserStack, and MySQL, ensuring end-to-end reliability in financial systems.",
        "Built and maintained IVR test scenarios to validate telephony payment flows.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Mass. Medical Society",
      period: "03/2020 - 07/2021",
      bullets: [
        "Developed and enhanced Angular components with TypeScript and SCSS for member tools and dashboards.",
        "Integrated REST APIs into web applications and handled asynchronous data flows for financial and membership services.",
        "Built a Java-based automation framework with Selenium and RestAssured, implementing 200+ automated UI and API tests.",
        "Automated smoke, regression, and integration test suites to improve release coverage and speed.",
        "Performed backend validation using Postman, MySQL, and AWS, ensuring data integrity in cloud-based systems.",
        "Contributed to Agile practices, code reviews, and mentored junior engineers in automation best practices.",
      ],
    },
    {
      title: "Software Engineer",
      company: "HMS Eliza",
      period: "11/2019 - 03/2020",
      bullets: [
        "Built insurance tools using JavaScript, HTML, and CSS, with responsive UI components and cross-browser compatibility.",
        "Integrated REST APIs with backend services for real-time claims and eligibility checks.",
        "Developed Python scripts for data setup, validation, and custom test workflows to support engineering and QA needs.",
        "Automated regression and end-to-end scenarios with Java, Selenium, Maven, and Cucumber, ensuring accuracy of telephony and web workflows.",
        "Created and executed IVR test cases (DTMF, voice input) to validate call center and payment systems.",
        "Supported DevOps with Docker-based local environments, debugging setups, and version control using Git.",
        "Collaborated in Agile sprints, code reviews, and defect triage using Jira and Salesforce, ensuring timely resolution of issues.",
      ],
    },
  ] as Experience[],
} as const;

export const PROJECTS_DATA: Project[] = [
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
    live: "",
    category: "API Automation Framework",
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
      "/assets/projects/cucumber-automation-framework/reports-file.png",
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
    live: "",
    category: "API Test Automation",
    date: "July 2024",
    details:
      "A fully automated Postman test suite for the ToolsQA BookStore API. Covers login, token generation, and book management with dynamic user creation, environment variables, pre-request/test scripts, and Newman support.",
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
    details:
      "This project automates UI testing for the Sauce Labs demo app using Selenium WebDriver and Cucumber with Gherkin syntax. The framework supports remote execution on Sauce Labs for cross-browser and cross-platform testing. It includes reusable step definitions, a page object model, TestNG runners, and cloud-based parallel execution with reporting.",
  },
  {
    id: 7,
    title: "Cypress UI and API Automation Framework for DemoQA",
    description:
      "A modern UI test automation framework built with Cypress and JavaScript, designed using the Page Object Model pattern. Integrates Allure reports for comprehensive test result visualization. Tests the DemoQA Text Box form with structured and maintainable architecture.",
    tools: ["JavaScript", "Cypress", "Allure", "Page Object Model", "Mocha"],
    images: [
      "/assets/projects/cypress-ui-api-automation-framework/cypress-allure-report.png",
      "/assets/projects/cypress-ui-api-automation-framework/text-box-page.png",
      "/assets/projects/cypress-ui-api-automation-framework/text-box-form-tests.png",
    ],
    repo: {
      label: "GitHub",
      url: "https://github.com/fbaltaci/cypress-automation-framework",
    },
    live: "",
    category: "UI and API Automation Framework",
    date: "June 2024",
    details:
      "This modern UI automation framework leverages Cypress and the Page Object Model to structure and maintain test cases. It targets the DemoQA site and covers form validation scenarios with proper test assertions and Allure report generation. The project demonstrates scalable Cypress architecture, custom commands, and plugin integration best practices.",
  },
] as const;
