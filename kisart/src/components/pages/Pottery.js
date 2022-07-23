import HeroSection from "../HeroSection";
import Footer from "../Footer";
import ArtCard from "../ArtCard";
import { pottery } from "../ArtCards";
import "./ArtGrid.css";

const Pottery = () => {
  return (
    <div>
      <div className="drawings">
        <h1>pottery</h1>
        <div className="art-grid">
          {pottery.map((pot, index) => (
            <div className="art-element">
              <ArtCard key={index} data={pot} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pottery;
