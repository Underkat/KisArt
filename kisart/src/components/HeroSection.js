import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <img src='/img/background.webp' alt='background'/> */}
      <article>
        <h1>
          "The most valiant thing you can do as an artist is inspire someone
          else to be creative."
        </h1>
        <span>Joseph Gordon-Levitt</span>
      </article>
    </div>
  );
}

export default HeroSection;
