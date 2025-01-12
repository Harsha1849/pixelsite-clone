import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CategoryPage from "./pages/CategoryPage";
import SupportPage from "./pages/SupportPage"; // Import the new SupportPage

import CartPage from "./pages/CartPage"; // Import CartPage
import UserDetailsPage from "./pages/UserDetailsPage"; 

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<CategoryPage category="Phones" />} />
          <Route path="/earbuds" element={<CategoryPage category="Earbuds" />} />
          <Route path="/watches" element={<CategoryPage category="Watches" />} />
          <Route path="/accessories" element={<CategoryPage category="Accessories" />} />
          <Route path="/support" element={<SupportPage />} /> {/* Add this route */}
          <Route path="/cart" element={<CartPage />} /> {/* CartPage route */}
          <Route path="/user" element={<UserDetailsPage />} /> {/* UserDetailsPage route */}
          <Route path="/:productId" element={<ProductDetailsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
