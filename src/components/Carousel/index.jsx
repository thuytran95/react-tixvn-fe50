import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.scss";

const Carousel = () => {
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
      maPhim: 1344,
      tenPhim: "13 reason why",
      biDanh: "13-reason-why",
      trailer: "https://www.youtube.com/embed/rCitoVqfyM8",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/13-reason-why_gp01.jpg",
      moTa:
        "Remember when this show first came out and everyone started realizing that the way they treat others actually matters, but only for about a week, then everyone went back to pushing ppl towards suicide again.",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-08-28T00:00:00",
      danhGia: 10,
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
  const options = {
    items: 1,
    nav: true,
    merge: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    video: true,
    lazyLoad: true,
    center: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  };

  const renderMovieList = () => {
    return movieList.map((movie, index) => {
      const { maPhim, tenPhim, hinhAnh, trailer } = movie;
      return (
        <div className="item " key={maPhim}>
          <div className="image">
            <div className="carousel__overlay overlay">
              <div className="carousel__overlay__play btn-play">
                <a className="carousel_popup" href={trailer}>
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            <img src={hinhAnh} alt={tenPhim} />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <OwlCarousel className="owl-theme" nav items={1} options>
        {renderMovieList()}
      </OwlCarousel>
    </>
  );
};

export default Carousel;
