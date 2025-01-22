const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, "data", "cart.json");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Get all cart items
app.get("/api/cart", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read cart data." });
    }
    res.json(JSON.parse(data));
  });
});

// Add an item to the cart
app.post("/api/cart", (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res
      .status(400)
      .json({ error: "Product ID and quantity are required." });
  }

  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read cart data." });
    }

    const cart = JSON.parse(data || "[]");
    const existingItem = cart.find((item) => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: cart.length + 1,
        productId,
        quantity,
        name: `Product ${productId}`, // Optional: Placeholder for product name
        price: 20.0, // Optional: Placeholder for price
      });
    }

    fs.writeFile(DATA_FILE, JSON.stringify(cart, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update cart data." });
      }
      res.status(201).json({ message: "Item added to cart." });
    });
  });
});

// Remove an item from the cart
app.delete("/api/cart/:id", (req, res) => {
  const itemId = parseInt(req.params.id);

  fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read cart data." });
    }

    const cart = JSON.parse(data);
    const updatedCart = cart.filter((item) => item.id !== itemId);

    fs.writeFile(DATA_FILE, JSON.stringify(updatedCart, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update cart data." });
      }
      res.json({ message: "Item removed from cart." });
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
