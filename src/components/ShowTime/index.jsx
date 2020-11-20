import React, { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import MovieItem from "../MovieItem";
import "./style.scss";

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
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    dots: true,
  };

  const renderMovieList = () => {
    return movieList.map((movie, idx) => {
      return <MovieItem key={movie.maPhim} />;
    });
  };

  return (
    <section id="showtime">
      <div className="container">
        <ul class="nav nav-tabs" id="showstime-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
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
          <li class="nav-item">
            <a
              class="nav-link"
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
        <div className="tab-content" id="showstime-content">
          <div
            className="tab-pane fade active show"
            id="showing"
            role="tabpanel"
            aria-labelledby="showing-tab"
          >
            <Slider ref={ref} {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowTime;
