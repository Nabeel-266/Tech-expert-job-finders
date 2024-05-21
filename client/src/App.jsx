import React from "react";
import TestimonialCard from './components/TestimonialCard'
// Import Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-full">
      <Home />
      <TestimonialCard />
    </div>
  );
};

export default App;
