import { PERSONAL_INFO } from "../constants";

/**
 * Hero section component displaying personal introduction
 */
const HomePage: React.FC = () => {
  return (
    <main className="main index-page">
      <section id="hero" className="hero section">
        <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>{PERSONAL_INFO.NAME}</h2>
              <p>{PERSONAL_INFO.TAGLINE}</p>
              <a href="#about" className="btn-get-started">
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
