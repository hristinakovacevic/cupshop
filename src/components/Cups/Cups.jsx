import React from "react";

import { Outlet } from "react-router-dom";
import Cup from "./Cup/Cup";
import cupsData from "../../assets/data/cupsData";

import { v4 as uuidv4 } from "uuid";

import "./Cups.model.css";

const Cups = () => {
  return (
    <div className="cups__background">
      <h1>Cups</h1>
      <div className="cups__container">
        {cupsData.map((cupData) => {
          return (
            <Cup
              title={cupData.title}
              img={cupData.img}
              price={cupData.price}
              id={cupData.id}
            />
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Cups;
