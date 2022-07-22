import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-container-content">
        <h1>ABOUT ME</h1>
        <p>Hello, and welcome to my art page!</p>
        <p>
          I have been drawing ever since I learned how to hold a crayon. A lot
          of my childhood was spent making crafts, doodling, and taking art
          classes at the Nepean Sportsplex in Ottawa West.
        </p>
        <p>
          Now as an adult, when I'm not busy studying, working, or volunteering,
          I continue to love making art and being creative.
        </p>
        <p>
          Since starting university in the fall of 2014, I've taken a variety of
          art classes, including portrait drawing, pottery, and landscape
          painting. Each has taught me not only about great art techniques, but
          also about myself as an artist, and has reinforced how much I love
          being creative. I enjoy using a variety of different mediums,
          including charcoal, graphite, clay, and acrylic paint.
        </p>
        <p>I hope you enjoy the pieces I've created over the years!</p>
        <Button className="contact-me">CONTACT ME </Button>
      </section>
      <img src="/img/profile.webp" />
      
    </div>
  )
}

export default About