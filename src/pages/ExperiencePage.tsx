import React from "react";

const summary = {
  name: "Fehmi Baltaci",
  description:
    "Full Stack Software Engineer with experience in front-end (Angular), back-end (Flask, Falcon), automation frameworks, and QA tooling. Passionate about building scalable, testable systems and UI dashboards.",
  details: ["Alpharetta, GA", "617-850-5304", "fehmibalt@gmail.com"],
};

const education = [
  {
    title: "MS in Software Development",
    period: "2023 - Present",
    institution: "Boston University",
  },
  {
    title: "QA Engineering Boot Camp",
    institution: "Boston Ivy Tech",
  },
  {
    title: "Bachelor's in Engineering",
    institution: "Bilecik University",
  },
];

const experience = [
  {
    title: "Software Engineer II",
    company: "Advisor360",
    period: "12/2023 - Present",
    bullets: [
      "Developed Angular UI components and Python Flask backend services.",
      "Wrote unit and E2E tests with Jest and Pytest to ensure quality and reliability.",
      "Collaborated with QA and UX teams to deliver production-ready features.",
      "Improved backend testability, reducing post-deployment issues.",
    ],
  },
  {
    title: "QA Automation Engineer II",
    company: "Advisor360",
    period: "11/2022 - 12/2023",
    bullets: [
      "Created Python dashboards using Plotly for test visibility.",
      "Built automation frameworks using Behave, Requests, and TestComplete.",
      "Performed manual and automated API/UI tests using Postman and TestComplete.",
    ],
  },
  {
    title: "QA Automation Engineer II",
    company: "Aliaswire",
    period: "7/2021 - 11/2022",
    bullets: [
      "Built a complete test framework with 250+ automated cases.",
      "Tested APIs and UI using Java, Selenium, and Rest-Assured.",
      "Managed testing life cycle with TestRail and JIRA.",
    ],
  },
  {
    title: "QA Automation Engineer",
    company: "Mass. Medical Society",
    period: "3/2020 - 7/2021",
    bullets: [
      "Automated backend and UI tests for financial services and gateways.",
      "Worked with Postman, MySQL, Jenkins, and AWS cloud testing.",
    ],
  },
  {
    title: "QA Automation Engineer",
    company: "HMS Eliza",
    period: "11/2019 - 3/2020",
    bullets: [
      "Executed IVR and End-to-End test scenarios using Java and Selenium.",
      "Tracked issues using Salesforce and JIRA.",
    ],
  },
];

const ExperiencePage: React.FC = () => {
  return (
    <main className="main resume-page">
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Experience</h2>
          <p>
            Results-driven Software Engineer with strong QA background, skilled in building full-stack applications and
            automation frameworks using modern technologies.
          </p>
        </div>

        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>{summary.name}</h4>
                <p>
                  <em>{summary.description}</em>
                </p>
                <ul>
                  {summary.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              {education.map((edu, i) => (
                <div className="resume-item" key={i}>
                  <h4>{edu.title}</h4>
                  {edu.period && <h5>{edu.period}</h5>}
                  <p>
                    <em>{edu.institution}</em>
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              {experience.map((exp, i) => (
                <div className="resume-item" key={i}>
                  <h4>{exp.title}</h4>
                  <h5>
                    {exp.company} | {exp.period}
                  </h5>
                  <ul>
                    {exp.bullets.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
