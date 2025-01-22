import React, { useState, useEffect } from "react";
import products from "../data/products.json"; // Adjusted based on your folder structure

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        // Fetching cart data from public folder
        const response = await fetch("/carts.json");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const cartData = await response.json();

        // Merging cart items with product details
        const updatedCart = cartData.map((cartItem) => {
          const product = products.find((p) => p.id === cartItem.productId);
          return {
            ...cartItem,
            name: product?.name || "Unknown Product",
            price: product?.price || 0,
            image: product?.images[0] || "placeholder.jpg",
          };
        });

        setCart(updatedCart);
      } catch (err) {
        console.error("Error fetching cart data:", err);
        setError(err.message);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <p>Product: {item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.productId)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  function removeFromCart(productId) {
    setCart(cart.filter((item) => item.productId !== productId));
  }
};

export default CartPage;
