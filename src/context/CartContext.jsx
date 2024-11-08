import React, { useState, useContext, createContext } from "react";
import cupsData from "../assets/data/cupsData";
const CartContext = createContext({
  cartList: [],
  cupInfo: () => {},

  addToCart: () => {},
  quantityData: 1,
  setQuantityData: () => {},
  totalAmount: () => {},
  removeFromCart: () => {},
});
export const CartContextProvider = ({ children }) => {
  const [quantityData, setQuantityData] = useState(1);

  const [cartList, setCartList] = useState([]);
  const cartData = {
    cartList,
    cupInfo,
    addToCart,
    quantityData,
    setQuantityData,
    totalAmount,
    removeFromCart,
  };

  function cupInfo(id) {
    let findCup = cupsData.find((item) => item.id === id);
    let cup = {
      id: findCup.id,
      title: findCup.title,
      image: findCup.img,
      material: findCup.material,
      size: findCup.size,
      manufacturer: findCup.manufacturer,
      price: findCup.price * quantityData,
      quantity: quantityData,
    };
    return cup;
  }

  function addToCart(cup) {
    setCartList((prevCartList) => {
      const existingItem = prevCartList.find((item) => item.id === cup.id);

      if (existingItem) {
        // If the cup exists, update the quantity
        return prevCartList.map((item) =>
          item.id === cup.id
            ? {
                ...item,
                price: parseInt(item.price) + parseInt(cup.price),
                quantity: parseInt(item.quantity) + parseInt(cup.quantity),
              }
            : item
        );
      } else {
        // If the cup doesn't exist, add it to the cart
        return [...prevCartList, { ...cup, quantity: cup.quantity }];
      }
    });
  }

  function removeFromCart(id) {
    return setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== id)
    );
  }

  function totalAmount() {
    let total = 0;
    cartList?.map((item) => {
      total += item.price;
    });
    return total;
  }
  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};
export const useCartData = () => {
  return useContext(CartContext);
};
