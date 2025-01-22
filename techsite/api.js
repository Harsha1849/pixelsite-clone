import axios from "axios";

const API_BASE_URL = "http://localhost:3001"; // Replace with your backend URL

export const addToCart = async (product) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart/add`, product);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const getCart = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
