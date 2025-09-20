import React, { useEffect } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS, PAGE_CONTENT } from "../constants";

const personalInfo = [
  { label: "Email", value: PERSONAL_INFO.EMAIL },
  { label: "Phone", value: PERSONAL_INFO.PHONE },
  {
    label: "LinkedIn",
    value: SOCIAL_LINKS.LINKEDIN.USERNAME,
    link: SOCIAL_LINKS.LINKEDIN.URL,
  },
  {
    label: "GitHub",
    value: SOCIAL_LINKS.GITHUB.USERNAME,
    link: SOCIAL_LINKS.GITHUB.URL,
  }
];

/**
 * About section component displaying personal information and details
 */
const AboutPage: React.FC = () => {
  useEffect(() => {
    // Example: AOS.init();
  }, []);

  return (
    <main className="main">
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{PAGE_CONTENT.ABOUT.TITLE}</h2>
          <p>{PAGE_CONTENT.ABOUT.SUBTITLE}</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-8 content">
              <h2>{PERSONAL_INFO.TITLE}</h2>
              <p className="fst-italic">{PERSONAL_INFO.DESCRIPTION}</p>
              <ul>
                {personalInfo.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.label}:</strong>{" "}
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </li>
                ))}
              </ul>
              <p>{PERSONAL_INFO.CURRENT_ROLE}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
