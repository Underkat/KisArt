import HeroSection from "../HeroSection";
import Footer from "../Footer";
import ArtCard from "../ArtCard";
import { drawings, paintings, pottery } from "../ArtCards";
import "./ArtGrid.css";

const Drawings = () => {
  return (
    <div>
      <div className="drawings">
        <h1>drawings</h1>
      <div className="art-grid">  
        {drawings.map((drawing, index) => (
          <div className="art-element">
            <ArtCard key={index} data={drawing} />
          </div>
        ))}
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Drawings;
