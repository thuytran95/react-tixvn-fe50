import React from "react";
import Header from "../../components/Header";
import CarouselSlider from "../../components/Carousel";
import News from "../../components/News";
import ShowTime from "../../components/ShowTime";
import Footer from "../../components/Footer";
import "./style.scss";

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
