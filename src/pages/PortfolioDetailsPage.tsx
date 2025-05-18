import React from "react";

const PortfolioDetailsPage: React.FC = () => {
  return (
    <main className="main portfolio-details-page">
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio Details</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="." alt="App 1" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/portfolio/product-1.jpg" alt="Product 1" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/portfolio/branding-1.jpg" alt="Branding 1" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/assets/portfolio/books-1.jpg" alt="Books 1" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>: <a href="#">www.example.com</a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia.
                  Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim.
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