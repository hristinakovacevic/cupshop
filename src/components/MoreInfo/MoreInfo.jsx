import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useCartData } from "../../context/CartContext";
import back from "../../assets/go-back-btn.svg";
import cart from "../../assets/shopping-cart.svg";

import "./MoreInfo.model.css";
const MoreInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cupInfo, quantityData, setQuantityData, addToCart } = useCartData();
  const cup = cupInfo(id);
  function increment() {
    setQuantityData((prevQuantity) => prevQuantity + 1);
  }
  function decrement() {
    setQuantityData((prevQuantity) => prevQuantity - 1);
  }
  return (
    <div className="moreInfo-card__container">
      <img
        src={back}
        alt="back button"
        className="back-btn"
        onClick={() => navigate(-1)}
      />
      <div className="more-info__content__container">
        <h1>{cup.title}</h1>
        <div className="more-info__details__container">
          <img src={cup.image} alt="cup image" />
          <div className="more-info__details">
            <div className="material_amount_container">
              {/* -------------------odavde */}
              <div>
                <p>Material</p>
                <p>{cup.material}</p>
                <p>Size</p>
                <p>{cup.size}</p>
                <p>Manufacturer</p>
                <p>{cup.manufacturer}</p>
              </div>
              <div className="amount__actions">
                <div className="amount__wrap">
                  <p>Amount</p>
                  <div className="amount_input">
                    <button className="incr-decr-btn" onClick={decrement}>
                      -
                    </button>
                    <input
                      type="number"
                      value={quantityData}
                      onChange={(e) => setQuantityData(e.target.value)}
                      min="0"
                      max="100"
                    />
                    <button className="incr-decr-btn" onClick={increment}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------dovde */}
            <div className="add-to-cart__price">
              {" "}
              <p>Price {cup.price} $</p>
              <button className="add-btn" onClick={() => addToCart(cup)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
