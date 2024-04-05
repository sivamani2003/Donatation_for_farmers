import React from "react";
import Header from "../Compoents/Header";
import Carousel from "../Compoents/Carousel";
import Work from "../Compoents/Work";
import Testmonial from "../Compoents/Testmonial";
import Footer from "../Compoents/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Work></Work>
      <Testmonial></Testmonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
