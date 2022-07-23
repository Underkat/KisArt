import HeroSection from "../HeroSection";
import Footer from "../Footer";
import ArtCard from "../ArtCard";
import { paintings } from "../ArtCards";
import "./ArtGrid.css";

const Paintings = () => {
    return (
        <div>
          <div className="drawings">
            <h1>paintings</h1>
            <div className="art-grid">
              {paintings.map((paint, index) => (
                <div className="art-element">
                  <ArtCard key={index} data={paint} />
                </div>
              ))}
            </div>
          </div>
    
          <Footer />
        </div>
      );
}

export default Paintings
