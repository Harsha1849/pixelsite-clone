// src/utils/cartUtils.js
export const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

export const addToCart = (item, quantity = 1) => {
  const cart = getCart();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};

export const removeFromCart = (itemId) => {
  const cart = getCart().filter((item) => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(cart));
};
