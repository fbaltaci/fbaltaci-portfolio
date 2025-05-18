import React, { useEffect } from "react";

const personalInfo = [
  { label: "Location", value: "Alpharetta, GA" },
  { label: "Email", value: "fehmibalt@gmail.com" },
  { label: "Phone", value: "617-850-5304" },
  {
    label: "LinkedIn",
    value: "fehmi-baltaci",
    link: "https://linkedin.com/in/fehmi-baltaci",
  },
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Example: AOS.init();
  }, []);

  return (
    <main className="main">
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            Passionate and versatile Software Engineer with a strong foundation in QA automation, backend services, and
            frontend development. Dedicated to delivering quality-driven solutions and building scalable systems.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/profile-img.jpg" className="img-fluid" alt="Fehmi Baltaci" />
            </div>
            <div className="col-lg-8 content">
              <h2>Software Engineer & QA Automation Expert</h2>
              <p className="fst-italic">
                Experienced in full-stack development and test automation with a track record of building robust
                applications and tools used across engineering teams.
              </p>
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
              <p>
                I'm currently working as a Software Engineer II at Advisor360°, developing Angular frontends and Python
                backend services. I bring a unique blend of development and QA skills, having created test frameworks
                and dashboards that support both engineering and QA teams. I'm continuously seeking to improve code
                quality and system reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
