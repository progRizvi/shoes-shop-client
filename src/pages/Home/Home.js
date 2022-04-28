import React from "react";
import Footer from "../../shared/Footer/Footer";
import Topbar from "../../shared/Topbar/Topbar";
import Clients from "./Clients/Clients";
import HomeSlider from "./HomeSlider/HomeSlider";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Topbar />
      <HomeSlider />
      <Products />
      <Reviews />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
