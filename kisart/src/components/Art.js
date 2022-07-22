import { Button } from "./Button";
import "./Art.css";

const art = () => {
  return (
    <div className="art-container">
      <div className="art-content">
        <h1>my art</h1>
        <div className="art-cards">
          <div className="art-card">
            <h2>drawings</h2>
            <img src="../img/d_img5.webp" />
            <Button buttonSize="btn--large">See more</Button>
          </div>
          <div className="art-card">
            <h2>pottery</h2>
            <img src="../img/p_img11.webp" />
            <Button buttonSize="btn--large">See more</Button>
          </div>
          <div className="art-card">
            <h2>paintings</h2>
            <img src="../img/i_img1.webp" />
            <Button buttonSize="btn--large">See more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default art;
