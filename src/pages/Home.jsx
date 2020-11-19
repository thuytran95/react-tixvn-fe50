import React from "react";
import CarouselSlider from "../components/Carousel";
import Footer from "../components/Footer";

import Header from "../components/Header";
import ShowTime from "../components/ShowTime";

const Home = () => {
  return (
    <>
      <Header />
      <CarouselSlider />
      <ShowTime />
      <Footer />
    </>
  );
};

export default Home;
