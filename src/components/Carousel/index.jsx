import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.scss";

const CarouselSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const movieList = [
    {
      maPhim: 1329,
      tenPhim: "Dao Kinh Hoang",
      biDanh: "dao-kinh-hoang",
      trailer: "https://www.youtube.com/embed/IHNzOHi8sJs",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/dao-kinh-hoang_gp01.jpg",
      moTa: "Người càng xinh đẹp, càng dễ lừa dối người khác",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-08-18T00:00:00",
      danhGia: 7,
    },

    {
      maPhim: 1359,
      tenPhim: "Vợ ba",
      biDanh: "vo-ba",
      trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/vo-ba_gp01.png",
      moTa: "Mắt lác qua",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-03-20T00:00:00",
      danhGia: 9,
    },
    {
      maPhim: 1374,
      tenPhim: "Natra Two",
      biDanh: "natra-two",
      trailer: "https://www.youtube.com/embed/U-MxFzqU3QA",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/natra-two_gp01.png",
      moTa: "abcd",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-04-17T00:00:00",
      danhGia: 9,
    },
  ];

  const renderMovieList = () => {
    return movieList.map((movie, idx) => {
      const { maPhim, tenPhim, hinhAnh, trailer } = movie;
      return (
        <Carousel.Item key={idx}>
          <div className="carousel__overlay overlay">
            <div className="carousel__overlay__play btn-play">
              <a className="carousel_popup" href={trailer}>
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
          <img className="d-block w-100" src={hinhAnh} alt={tenPhim} />w
        </Carousel.Item>
      );
    });
  };

  return (
    <section id="carousel">
      <Carousel
        id="carouselCustomize"
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={
          <span className=" carousel-control-btn">
            <i className="fa fa-angle-left"></i>
          </span>
        }
        nextIcon={
          <span className="carousel-control-btn">
            <i className="fa fa-angle-right"></i>
          </span>
        }
      >
        {renderMovieList()}
      </Carousel>
    </section>
  );
};

export default CarouselSlider;
