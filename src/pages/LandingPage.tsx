import React from "react";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ExperiencePage from "./ExperiencePage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";

const LandingPage: React.FC = () => {
  return (
    <>
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
};

export default LandingPage;
