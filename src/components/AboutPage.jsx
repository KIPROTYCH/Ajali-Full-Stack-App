import React from "react";
import Footer from "./Footer";
import "../css/AboutPage.css";

function AboutPage() {
 
  const testimonials = [
    {
      src: "https://tinyurl.com/ystxfs5z",
      testimonial:
        "In the chaos of a car crash, time is of the essence. Thanks to this website's swift response, my daughter's accident was met with immediate care, reducing trauma for our family.",
    },
    {
      src: "https://tinyurl.com/yux7ecza",
      testimonial:
        "When my car collided, this website was my lifeline. Their immediate response team brought solace during a terrifying time, giving my family hope and ensuring our safety.",
    },
    {
      src: "https://tinyurl.com/yw8ona2o",
      testimonial:
        "Prompt, proficient, and compassionate, this website's response team was our guardian angels. Their rapid arrival in our moment of crisis provided comfort and reassurance like no other.",
    },
    {
      src: "https://tinyurl.com/ystxfs5z",
      testimonial:
        "Amidst the chaos of an accident, this website's swift arrival was a beacon of hope. They played a pivotal role in our loved one's survival, leaving us forever grateful.",
    },
  ];

  return (
    <>
      <div className="container">
        <img
          src="https://tinyurl.com/ymofa4k2"
          alt="Banner Image"
          className="banner-image"
        />

        <h2 className="title">Why Choose Us?</h2>
        <p className="description">
          With over 10 years of unwavering commitment, We ensure rapid response,
          expert assistance, and unmatched reliability during critical moments
          for your peace of mind and security.
        </p>
        <div className="content-container">
          <div className="content">
            <img
              src="https://www.tourmyindia.com/imgnew/experience.svg"
              alt="not found"
              width={80}
            />
            <p className="content-description">
              Ajali, we are a dedicated team of individuals who are passionate
              about safety and community well-being. Our goal is to provide you
              with the tools you need to make your community a safer place. We
              believe that everyone has the right to live in a secure and
              protected environment.
            </p>
          </div>
          <div className="content">
            <img
              src="https://www.tourmyindia.com/imgnew/positive-customer-feedback.svg"
              alt="not found"
              width={80}
            />
            <p className="description">
              Our vision is to create a world where safety is a fundamental
              right and every individual has the power to contribute to the
              security and well-being of their community. We aim to harness the
              potential of technology to build safer, more connected societies.
            </p>
          </div>
          <div className="content">
            <img
              src="https://www.tourmyindia.com/imgnew/recognition-tour-01.svg"
              alt="not found"
              width={80}
            />
            <p className="content-description">
              Our vision is to create a thriving book club that unites readers
              worldwide, encourages diverse literary exploration, and fosters
              meaningful connections through the love of literature.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="title">Testimonials</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img
                src={testimonial.src}
                alt="User"
                width={80}
                className="testimonial-image"
              />
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
