import React from "react";
import "./Loading.model.css";
import logo from "../../assets/cup.svg";

const Loading = () => {
  return (
    <div className="loading__container">
      <p className="loading__title">
        Fill the cup of happiness for others, and there will be enough
        overflowing to fill yours to the brim.
      </p>
      <img src={logo} className="logo logo_spin" alt="cup logo" />
    </div>
  );
};
export default Loading;
