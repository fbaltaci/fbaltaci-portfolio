import React from "react";

const contactInfo = [
  {
    icon: "bi bi-telephone",
    title: "Call Me",
    text: "+1 (617) 850-5304",
    delay: 200,
  },
  {
    icon: "bi bi-linkedin",
    title: "LinkedIn",
    text: "fehmi-baltaci",
    link: "https://linkedin.com/in/fehmi-baltaci",
    delay: 250,
  },
  {
    icon: "bi bi-envelope",
    title: "Email Me",
    text: "fehmibalt@gmail.com",
    delay: 300,
  },
];

const ContactPage: React.FC = () => {
  return (
    <main className="main contact-page">
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Feel free to reach out for opportunities, questions, or collaborations!</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                {contactInfo.map((info, index) => (
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={info.delay} key={index}>
                    <i className={`${info.icon} flex-shrink-0`}></i>
                    <div>
                      <h3>{info.title}</h3>
                      <p>{info.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-7">
              <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-3">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="col-12">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      rows={5}
                      className="form-control"
                      placeholder="Message"
                      required></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
