import React from "react";
import { Link } from "react-router-dom";

import "./Cup.model.css";
const Cup = ({ title, img, price, id }) => {
  return (
    <Link className="cup-link" to={`/cups/${id}`}>
      <div className="cup-card" key={id}>
        <p>{title}</p>
        <img src={img} alt="some cup" loading="lazy" />

        <p>Price: {price}</p>
      </div>
    </Link>
  );
};

export default Cup;
