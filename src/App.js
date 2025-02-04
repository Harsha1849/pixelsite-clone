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

import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import PressPage from "./pages/PressPage";
import BlogPage from "./pages/BlogPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import Form from "./pages/Form";


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

          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/whychoose" element={<FeaturesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Form />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
