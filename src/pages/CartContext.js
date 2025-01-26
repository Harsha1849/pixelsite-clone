import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.productId === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { productId, quantity }];
    });
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
