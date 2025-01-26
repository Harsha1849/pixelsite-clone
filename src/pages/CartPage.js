import React from "react";
import { useCart } from "../pages/CartContext"; // Import useCart
import products from "../data/products.json"; // Import products data for product details

const CartPage = () => {
  const { cart, updateCart } = useCart(); // Access global cart state and update function

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const product = products.find((prod) => prod.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  // Handle removing an item
  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    updateCart(updatedCart); // Update the cart state
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
          <h2 style={{ textAlign: "right" }}>
            Total: ${totalPrice.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
