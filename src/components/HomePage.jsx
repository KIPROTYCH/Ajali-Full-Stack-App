import React from "react";
import "../css/HomePage.css";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Partners from "./Partners";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="background-image"></div>
      <div className="home-main">
        <h1 className="home-title">Accident Emergency</h1>
        <p className="home-text">Your Safety, Our Priority</p>
        <div className="emergency-info">
          <div className="emergency-card">
            <h3>Hotline Numbers</h3>
            <p>
              Call Us: 123-456-789 <br />
              Police: 911 <br />
              SMS: Text "AJALI" to 666
            </p>
          </div>
        </div>
      </div>
      <Reviews />
      <Partners />
      <Footer />
    </div>
  );
}
