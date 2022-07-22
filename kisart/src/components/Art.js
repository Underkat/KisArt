import { Button } from "./Button";
import "./Art.css";

const art = () => {
  return (
    <div className="art-container">
      <h1>ABOUT ME</h1>
      <div className="art-cards">
        <div className="art-cart">
          <h2></h2>
          <img src="" />
          <Button />
        </div>
        <div className="art-cart">
          <h2></h2>
          <img src="" />
          <Button />
        </div>
        <div className="art-cart">
          <h2></h2>
          <img src="" />
          <Button />
        </div>
      </div>
      <p>
        I have been drawing ever since I learned how to hold a crayon. A lot of
        my childhood was spent making crafts, doodling, and taking art classes
        at the Nepean Sportsplex in Ottawa West.
      </p>
      <p>
        Now as an adult, when I'm not busy studying, working, or volunteering, I
        continue to love making art and being creative.
      </p>
      <p>
        Since starting university in the fall of 2014, I've taken a variety of
        art classes, including portrait drawing, pottery, and landscape
        painting. Each has taught me not only about great art techniques, but
        also about myself as an artist, and has reinforced how much I love being
        creative. I enjoy using a variety of different mediums, including
        charcoal, graphite, clay, and acrylic paint.
      </p>
    </div>
  );
};

export default art;
