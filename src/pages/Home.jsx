import React from "react";
import CarouselSlider from "../components/Carousel";
import Footer from "../components/Footer";

import Header from "../components/Header";
import News from "../components/News";
import ShowTime from "../components/ShowTime";

const Home = () => {
  return (
    <>
      <Header />
      <CarouselSlider />
      <ShowTime />
      <News />
      <Footer />
    </>
  );
};

export default Home;
