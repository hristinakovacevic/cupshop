import React from "react";
import { useCartData } from "../../context/CartContext";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/delete-icon.svg";

import "./Cart.model.css";
const Cart = () => {
  const { cartList, totalAmount, removeFromCart } = useCartData();

  let totalCartPrice = totalAmount();

  return (
    <div className="cart__container">
      <h1>Your cart</h1>

      <table>
        <thead>
          <tr>
            <th>
              <h3>Price</h3>
            </th>
            <th>
              <h3>Quantity</h3>
            </th>
          </tr>
        </thead>
        <tbody className="cart-info__container">
          {cartList ? (
            cartList.map((item) => {
              return (
                <tr className="cart-row__container" key={item.id}>
                  <td>
                    <Link to={`/cups/${item.id}`}>
                      <img
                        src={item.image}
                        alt="cup image"
                        className="cart-img"
                      />
                    </Link>
                  </td>
                  <td>
                    <p>{item.title}</p>
                  </td>
                  <td>
                    <p>{item.price}</p>
                  </td>
                  <td>
                    <p>{item.quantity}</p>
                  </td>
                  <td>
                    <img
                      src={deleteIcon}
                      alt="delete-icon"
                      className="delete-icon"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No cups in cart</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">
              <strong>Total</strong>
              {totalCartPrice}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
