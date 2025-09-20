import React from "react";
import { PERSONAL_INFO, EXPERIENCE_CONTENT } from "../constants";

const summary = {
  name: PERSONAL_INFO.NAME,
  description: EXPERIENCE_CONTENT.SUMMARY.DESCRIPTION,
  details: [PERSONAL_INFO.LOCATION, PERSONAL_INFO.PHONE, PERSONAL_INFO.EMAIL],
};

/**
 * Experience section component displaying education and work history
 */
const ExperiencePage: React.FC = () => {
  return (
    <main className="main resume-page">
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{EXPERIENCE_CONTENT.TITLE}</h2>
          <p>{EXPERIENCE_CONTENT.SUBTITLE}</p>
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
              {EXPERIENCE_CONTENT.EDUCATION.map((edu, i) => (
                <div className="resume-item" key={i}>
                  <h4>{edu.title}</h4>
                  {'period' in edu && <h5>{edu.period}</h5>}
                  <p>
                    <em>{edu.institution}</em>
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              {EXPERIENCE_CONTENT.EXPERIENCE.map((exp, i) => (
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
