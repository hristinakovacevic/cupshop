import React from "react";
import "./Homepage.model.css";
import slogan from "../../assets/daily-brew.svg";
const Homepage = () => {
  return (
    <div className="homepage__container">
      <h1>Cup shop</h1>
      <img
        src={slogan}
        alt="Your daily brew in every hue! "
        className="slogan-img"
      />
    </div>
  );
};

export default Homepage;
