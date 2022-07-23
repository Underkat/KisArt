import "./HeroSection.css";

const HeroSection = (props) => {
  return (
    <div className="hero-container">
      <article>
        <h1>{props.title}</h1>
        <span>{props.signature}</span>
      </article>
    </div>
  );
};

HeroSection.defaultProps = {
  title:
    '"The most valiant thing you can do as an artist is inspire someone else to be creative."',
  signature: "Joseph Gordon-Levitt",
};

export default HeroSection;
