import React from "react";

const Home = ({ homeImage }) => {
  return (
    <div className="home d-flex align-items-center justify-content-center flex-column">
      <h1>Welcom to Prime Shoppe</h1>
      <img src={homeImage} alt="home-image" className="home-image" />
    </div>
  );
};

export default Home;
