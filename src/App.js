import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
