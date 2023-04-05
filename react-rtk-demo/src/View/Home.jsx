import React from "react";
import "../Stylesheets/Home.css";
import Header from "../Components/Header";
import Content from "../Components/Content";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Content />
    </div>
  );
};

export default Home;
