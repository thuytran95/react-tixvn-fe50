import React, { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import MovieItem from "../MovieItem";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowTime = () => {
  const movieList = [
    {
      maPhim: 1315,
      tenPhim: "Tedd",
      biDanh: "tedd",
      trailer: "https://www.youtube.com/embed/S3AVcCggRnU",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/tedd_gp02.png",
      moTa:
        "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1330,
      tenPhim: "Trainwreck",
      biDanh: "trainwreck",
      trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      moTa:
        "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1345,
      tenPhim: "Inside Out",
      biDanh: "inside-out",
      trailer: "https://www.youtube.com/embed/seMwpP0yeu4",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
      moTa:
        "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1360,
      tenPhim: "Home",
      biDanh: "home",
      trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
      moTa:
        "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
    {
      maPhim: 1375,
      tenPhim: "Batman v Superman: Dawn of Justice",
      biDanh: "batman-v-superman-dawn-of-justice",
      trailer: "https://www.youtube.com/embed/0WWzgGyAH6Y",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
      moTa:
        "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
      maNhom: "GP02",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
  ];

  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const renderShowingMovie = () => {
    return movieList.map((movie) => {
      return (
        <div key={movie.maPhim} className="showstime__wrapper">
          <div className="showstime__wrapper__img">
            <img src="./images/showstime/diep-vien-sieu-lay-my-spy-p-15959969936666_215x318.png" />
            <span className="showstime__wrapper__earlyshowing btn-default">
              Xuất Chiếu Sớm
            </span>
            <div className="showstime__wrapper__prebooked">
              <img src="./images/showstime/film_type_3.png" />
            </div>
            <div className="showstime__wrapper__overlay">
              <div className="btn-play">
                <a href="#">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            <div className="showstime__wrapper__star">
              <p>8.2</p>
              <p className="showstime__wrapper__star__list">
                <img src="./images/showstime/star1.png" />
                <img src="./images/showstime/star1.png" />
                <img src="./images/showstime/star1.png" />
                <img src="./images/showstime/star1.png" />
                <img src="./images/showstime/star1.2.png" />
              </p>
            </div>
          </div>
          <div className="showstime__wrapper__content">
            <div className="showstime__content__title">
              <span className="filmAge">C13</span>
              Điệp Viên Siêu Lầy - My Spy - (13)
            </div>
            <div className="showstime__content__time">
              <p> 100 phút</p>
            </div>
            <div className="showstime__content__overlay">
              <a href="#" className="btn-default">
                MUA VÉ
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="showtime">
      <div className="container">
        <ul className="nav nav-tabs" id="showtime-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="showing-tab"
              data-toggle="tab"
              href="#showing"
              role="tab"
              aria-controls="showing"
              aria-selected="true"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="comingsoon-tab"
              data-toggle="tab"
              href="#comingsoon"
              role="tab"
              aria-controls="comingsoon"
              aria-selected="false"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="showtime-content">
          <div
            className="tab-pane fade active show"
            id="showing"
            role="tabpanel"
            aria-labelledby="showing-tab"
          >
            <Slider
              className="showtime-slider"
              ref={ref}
              {...settings}
              arrows={true}
              nextArrow={
                <span className="showtime-arrow">
                  <i className="fa fa-angle-right"></i>
                </span>
              }
              prevArrow={
                <span className=" showtime-arrow">
                  <i className="fa fa-angle-left"></i>
                </span>
              }
            >
              {renderShowingMovie()}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowTime;
