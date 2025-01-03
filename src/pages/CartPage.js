import React, { useState } from "react";
import "../components/CartPage.css";
import productsData from "../data/products.json";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Initially empty cart

  const handleAddItem = (productId) => {
    const product = productsData.find((item) => item.id === productId);
    if (product) {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === productId);
        if (existingItem) {
          // Increment quantity if the item is already in the cart
          return prevItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        // Add new item to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      });
    }
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };

  const calculateSummary = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );
    const shippingFee = subtotal > 0 ? 10 : 0; // Example logic
    const estimatedTotal = subtotal + shippingFee;
    return { subtotal, shippingFee, estimatedTotal };
  };

  const { subtotal, shippingFee, estimatedTotal } = calculateSummary();

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="cart-item-controls">
                  <button onClick={() => handleRemoveItem(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddItem(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="shipping-details">
          <h3>Shipping Address</h3>
          <p>Enter your address details here...</p>
          <h3>User Details</h3>
          <p>Enter your user details here...</p>
        </div>
      </div>
      <div className="cart-right">
        <h2>Summary</h2>
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Shipping Fee:</span>
          <span>${shippingFee.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Estimated Total:</span>
          <span>${estimatedTotal.toFixed(2)}</span>
        </div>
        <div className="promo-code">
          <input type="text" placeholder="Enter promo code" />
          <button>Apply</button>
        </div>
        <button className="place-order-button">Place Order</button>
      </div>
    </div>
  );
};

export default CartPage;
