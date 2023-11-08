
import React from "react";
import { FaUser, FaHospital, FaUniversity } from "react-icons/fa";
import "../css/Reviews.css";

const Reviews = () => {
  const reviewData = [
    {
      name: "Partnering and Team Building",
      image: "https://tinyurl.com/ywgwuq2n",
      description:
        "We, as a collaborative and dynamic team, are deeply committed to partnering and building strong connections. Together, we forge alliances and foster teamwork, recognizing that our collective strength is greater than the sum of our individual efforts. Through strategic partnerships and effective team building, we harness our shared talents to achieve success and overcome challenges with unity and purpose.",
      moreInfoURL: "https://example.com/delilah-info",
    },
    {
      name: "Knowledge Cultivation",
      image: "https://tinyurl.com/ywkfen9g",
      description:
        "We as Team Ajali deliberately engage in continuous knowledge acquisition, actively seeking new insights, information, and expertise to stay at the forefront of our industry. Through dedicated learning and exploration, we ensure that we remain innovative and well-informed, driving our success and growth.",
      moreInfoURL: "https://example.com/riggy-g-info",
    },
    {
      name: "Advocacy",
      image: "https://tinyurl.com/yr8xmvnz",
      description:
        "We as passionate advocates are unwavering in our commitment to championing important causes. With determination and empathy, we advocate for change, striving to raise awareness, influence policy, and make a positive impact on the issues we hold dear. Our advocacy is a powerful force for progress and a catalyst for a better future.",
      moreInfoURL: "https://example.com/elizabeth-info",
    },
    {
      name: "Research & Development",
      image: "https://tinyurl.com/yq64u7g8",
      description:
        "We, as a dedicated Research and Development team, are at the forefront of innovation. Through rigorous exploration, experimentation, and collaboration, we drive progress and shape the future. Our relentless pursuit of knowledge and creativity fuels our mission to develop cutting-edge solutions and technologies that make a meaningful difference in the world.",
      moreInfoURL: "https://example.com/caicedo-info",
    },
  ];

  return (
    <div className="reviews-container">
      <div className="our-impact">
        <h1>Our Impact</h1>
        <div className="impact-cards">
          <div className="impact-card">
            <FaUser size={60} color="#007bff" />
            <h3>Public</h3>
            <p>
              AJali website has positively impacted the public, offering swift
              emergency response and enhancing safety, saving lives, and making
              communities more secure.
            </p>
          </div>
          <div className="impact-card">
            <FaHospital size={60} color="#28a745" />
            <h3>Hospital</h3>
            <p>
              AJali website has significantly benefited hospitals by ensuring
              timely responses to emergencies, reducing hospital admissions, and
              enabling better patient care, ultimately improving healthcare
              outcomes.
            </p>
          </div>
          <div className="impact-card">
            <FaUniversity size={60} color="#ffc107" />
            <h3>Government</h3>
            <p>
              The AJali website has positively influenced government agencies,
              improving disaster management and public safety coordination. It
              enhances emergency response capabilities, making communities more
              resilient and secure.
            </p>
          </div>
        </div>
      </div>
      <h1 className="how">How we are improving Lives</h1>
      <div className="reviews-grid">
        {reviewData.map((review, index) => (
          <div key={index} className="review">
            <div className="user-image">
              <img src={review.image} alt={review.name} />
            </div>
            <div className="review-content">
              <h3>{review.name}</h3>
              <p>{review.description}</p>
              <a
                href={review.moreInfoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
