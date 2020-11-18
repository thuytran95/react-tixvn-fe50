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
      const { hinhAnh, trailer } = movie;
      return (
        <Carousel.Item key={idx}>
          <div
            style={{
              backgroundImage: `url('${hinhAnh}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              paddingBottom: "43%",
            }}
          ></div>
          <div className="carousel__overlay overlay">
            <div className="carousel__overlay__play btn-play">
              <a
                className="carousel_popup"
                href={trailer}
                data-toggle="modal"
                data-target={`#modal-${idx}`}
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </Carousel.Item>
      );
    });
  };

  const renderTrailer = () => {
    return movieList.map((movie, idx) => {
      const { trailer } = movie;
      return (
        <div className="modal modal-customize" id={`modal-${idx}`} key={idx}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <iframe src={trailer} frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
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
      <div id="carousel__trailer">{renderTrailer()}</div>
    </section>
  );
};

export default CarouselSlider;
