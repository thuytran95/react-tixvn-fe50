import React from "react";
import dataMovie from "../../assets/data/movieListUpComing.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import MovieItem from "../MovieItem";

const ShowTime = (props) => {
  const movieList = props.movieList;

  const movieListUpComing = dataMovie;

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <span {...props} className="slick-prev slick-arrow showtime-arrow">
      <i className="fa fa-angle-left"></i>
    </span>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <span {...props} className="slick-next slick-arrow showtime-arrow">
      <i className="fa fa-angle-right"></i>
    </span>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
  };

  const renderTrailer = (list) => {
    return list?.map((movie, index) => {
      const { trailer, maPhim } = movie;
      return (
        <div
          className="modal modal-customize"
          id={`modal-${maPhim}`}
          key={index}
        >
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
    <section id="showtime">
      <div className="container">
        <ul className="nav nav-tabs" id="showstime-tab" role="tablist">
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
              {...settings}
              nextArrow={<SlickArrowRight />}
              prevArrow={<SlickArrowLeft />}
            >
              {movieList.map(function (movie) {
                return (
                  <React.Fragment key={movie.maPhim}>
                    <MovieItem movie={movie} />
                  </React.Fragment>
                );
              })}
            </Slider>
          </div>

          <div
            className="tab-pane fade"
            id="comingsoon"
            role="tabpanel"
            aria-labelledby="comingsoon-tab"
          >
            <Slider
              className="showtime-slider"
              {...settings}
              nextArrow={<SlickArrowRight />}
              prevArrow={<SlickArrowLeft />}
            >
              {movieListUpComing?.map((movie) => {
                return (
                  <React.Fragment key={movie.maPhim}>
                    <MovieItem movie={movie} />
                  </React.Fragment>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowTime;
