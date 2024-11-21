import React, { useState, useRef, useEffect } from 'react';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import '../css/Services.css';

const services = [
  {
    title: "Web Design",
    description: "High-quality websites optimized for all devices.",
    image: "path-to-web-design-image",
  },
  {
    title: "Mobile App Design",
    description: "User-friendly and visually appealing mobile apps.",
    image: "path-to-mobile-design-image",
  },
  // Add other services here
];
const faqs = [
  {
    question: "WHAT INSPIRED THE FOUNDING OF GAPSY WEB DESIGN STUDIO?",
    answer: "The idea for Gapsy Web Design Studio came about because we saw a need for high-quality, custom web design that was affordable for small businesses and startups. We wanted to make the web design process easy and stress-free for our clients, so they could focus on running their businesses."
  },
  {
    question: "WHAT SETS GAPSY APART FROM OTHER WEB DESIGN STUDIOS?",
    answer: "Our team of web design experts have years of experience in the industry, and we use the latest technologies and trends to create custom websites that are tailored to each of our clients' unique needs. We also pride ourselves on providing excellent customer service and support, so our clients always have someone to turn to with any questions or concerns."
  },
  {
    question: "WHAT ARE SOME OF THE CHALLENGES YOU FACE AS A WEB DESIGN STUDIO?",
    answer: "Some of the challenges we face include staying up-to-date with the latest design trends and technologies, meeting tight deadlines, and ensuring that we meet the needs of our diverse client base."
  },
  {
    question: "WHAT ARE YOUR GOALS FOR THE FUTURE OF GAPSY?",
    answer: "Our goals include expanding our client base, enhancing our service offerings, and continuing to improve our skills and knowledge to provide the best possible service to our clients."
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? answerRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className="icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{
          height: `${height}px`,
          opacity: isOpen ? 1 : 0,
          transition: 'height 0.3s ease, opacity 0.3s ease',
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

const BenefitCard = ({ icon, title, text }) => {
  return (
    <div className="benefit-card">
      <div className="icon">{icon}</div>
      <div>
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <section className="hero-container">
        <div className="hero-content">
          <div className="hero-content2">
            <div className="hero-content3">
              <img alt="Breadcrumbs" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="styles_label__fRSpJ" src="/breadcrumbs.svg" />
              <h2 className="subheading">Gapsy / Services</h2>
            </div>
            <p className="description">
              Bring your dream project to life with one of our 8 comprehensive services!
            </p>
          </div>
          <h1 className="main-heading">Design Studio that Brings Creativity to Life!</h1>
          <div className="divider"></div> {/* Divider line */}
          <div className="hero-content2">
            <button className="hire-us-button">Hire us</button>
            <p className="description2">
              Gapsy is a digital agency specializing in mobile and web design and development, branding and animation.Gapsy is a digital agency specializing in mobile and web design and development, branding and animation.
            </p>
          </div>
        </div>
      </section>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-container">
              <img src={service.image} alt={`${service.title}`} className="service-image" />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="view-more-button">View More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <h1 className="header">We work with the most progressive companies from all over the world.</h1>
        <div className="divider"></div> {/* Divider line */}
        <div className="hero-content2">
          <p />
          <p className="description4">
            Gapsy web design Studio is a professional web design company that has been in business since 2014.
            We have a team of highly skilled and experienced web designers who are able to create custom websites
            that are both visually appealing and user-friendly. We take pride in our work, and we are confident
            that we can provide our clients with the best possible service. Some of the benefits of working with
            Gapsy web design Studio include:
          </p>
        </div>
        <div className="benefits">
          <BenefitCard
            icon="🌍"
            title="Time zones are not a problem"
            text="We are available to work with clients in any time zone. In addition, we have team members in different time zones who can work with you to get your project done on time. This allows us to be more flexible with our clients and to work on their schedule."
          />
          <BenefitCard
            icon="📅"
            title="Flexible project work schedule"
            text="We are flexible with our project work schedule and can work around your schedule. We understand that our clients have different schedules and we will work with you to get the project done when it is convenient for you."
          />
          <BenefitCard
            icon="💲"
            title="Affordable pricing policy suits all customers"
            text="We have an affordable pricing policy that allows our services to be accessible to a wide range of customers."
          />
          <BenefitCard
            icon="🤝"
            title="Specialists for solving different problems"
            text="We have specialists for solving different problems, ensuring that our clients receive the most appropriate solutions."
          />
        </div>
      </div>
      <div className="app-container">
        <h1 className="header">Do you have any questions? We tried to answer most of them!</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <div className="app-container">
        <Testimonials />
      </div>

      <ContactForm />
    </div>
  );
};

export default Services;
