import React, { useState } from "react";
import { useCart } from "../pages/CartContext"; // Import useCart
import products from "../data/products.json"; // Import products data for product details
import Form from "./Form"; // Import the checkout form

const CartPage = () => {
  const { cart, updateCart } = useCart();
  const [showForm, setShowForm] = useState(false); // State to show/hide form

  const totalPrice = cart.reduce((total, item) => {
    const product = products.find((prod) => prod.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    updateCart(updatedCart);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item, index) => {
              const product = products.find((prod) => prod.id === item.productId);
              if (!product) return null;

              return (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                    border: "1px solid #ddd",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={require(`../assets/images/${product.images[0]}`)}
                    alt={product.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      marginRight: "20px",
                      borderRadius: "8px",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: "0 0 5px" }}>{product.name}</h3>
                    <p style={{ margin: "0 0 5px" }}>
                      Price: ${product.price.toFixed(2)}
                    </p>
                    <p style={{ margin: "0" }}>Quantity: {item.quantity}</p>
                  </div>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: "0 20px 0 0",
                    }}
                  >
                    ${item.quantity * product.price}
                  </p>
                  <button
                    onClick={() => handleRemove(item.productId)}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <hr style={{ margin: "20px 0" }} />
          <h2 style={{ textAlign: "right" }}>Total: ${totalPrice.toFixed(2)}</h2>

          {/* Checkout Button */}
          <button
            onClick={() => setShowForm(true)}
            style={{
              display: "block",
              margin: "20px auto",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              fontSize: "18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </div>
      )}

      {/* Checkout Form Modal */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              position: "relative",
              maxWidth: "500px",
              width: "90%",
            }}
          >
            <button
              onClick={() => setShowForm(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
