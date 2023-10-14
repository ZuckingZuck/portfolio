import React from "react";
import Welcome from "../components/HomePage/Welcome";
import Competencies from "../components/HomePage/Competencies";
const Home = () => {
  return (
    <div className="mb-8">
      <Welcome />
      <Competencies />
    </div>
  );
};

export default Home;
