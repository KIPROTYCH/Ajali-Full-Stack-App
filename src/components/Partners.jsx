
import React from "react";
import { Link } from "react-router-dom"; 
import "../css/Partners.css";
import cogLogo from "../images/cog.jpg";
import ministryOfHealthLogo from "../images/moh.jpg";
import healthOrgXLogo from "../images/aga.png";
import healthOrgYLogo from "../images/amref.png";

function Partners() {
  const partnerData = [
    {
      name: "County Government of Kenya",
      description:
        "he Council of Governors in Kenya plays a pivotal role in coordinating emergency response teams at the county level. This collaboration ensures timely and effective responses to emergencies, safeguarding lives and property in diverse regions of the country.",
      imageUrl: cogLogo,
      link: "https://www.cog.go.ke/",
    },
    {
      name: "Ministry of Health",
      description:
        "The Ministry of Health in Kenya is the governmental body responsible for the country's health policies, regulations, and healthcare delivery, aiming to improve public health and healthcare services nationwide.",
      imageUrl: ministryOfHealthLogo,
      link: "https://www.health.go.ke/",
    },
    {
      name: "Aga Khan Hospital",
      description:
        "Aga Khan Hospital in Kenya is an healthcare facility providing high-quality medical services. Known for advanced technology and compassionate care, it's a trusted institution dedicated to the well-being of patients.",
      imageUrl: healthOrgXLogo,
      link: "https://www.agakhanhospitals.org/en/kenya",
    },
    {
      name: "Amref Kenya",
      description:
        "Amref Health Kenya is an NGO improving healthcare in Kenya through training, education, and services. They focus on diverse health issues and strengthen the healthcare system, benefiting underserved communities.",
      imageUrl: healthOrgYLogo,
      link: "https://amref.org/kenya/",
    },
  ];

  return (
    <div className="partners-page">
      <div className="partners-header">
        <h2 className="section-title">Our Partners</h2>
      </div>
      <div className="partners-container">
        {partnerData.map((partner, index) => (
          <div key={index} className="partner-card">
            <img
              src={partner.imageUrl}
              alt={partner.name}
              className="partner-logo"
            />
            <h3 className="partner-name">{partner.name}</h3>
            <p className="partner-description">{partner.description}</p>
            <Link to={partner.link} className="partner-button" target="_blank">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
