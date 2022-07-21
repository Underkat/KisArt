import React from "react";
import { Link } from "reac-router-dom";

export default function CardItem() {
  return (
    <div>
      <li className="cards--item">
        <Link className="cards--item--link">
          <figure className="cards--item--pic-wrap">
            <img src="/" alt="Test" className="cards--item--img" />
          </figure>
          <div className="cards--item--info">
            <h5 className="cards--items--text"></h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

