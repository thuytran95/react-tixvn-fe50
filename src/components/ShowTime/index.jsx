import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const ShowTime = (props) => {
  const movieList = props.movieList;
  const movieListUpComing = props?.movieListUpComing;

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
    return list.map((movie, index) => {
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
                    <div className="col" key={movie.maPhim}>
                      <div className="card showtime__card">
                        <div
                          className="showtime__image"
                          style={{
                            backgroundImage: `url('${movie.hinhAnh}')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="showtime__overlay">
                            <div className="btn-play">
                              <a
                                href={movie.trailer}
                                data-toggle="modal"
                                data-target={`#modal-${movie.maPhim}`}
                              >
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="showtime__rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />

                            <span>({movie.danhGia})</span>
                          </div>
                        </div>

                        <div className="card-body showtime__card__body">
                          <div className="showtime__content showtime__content__overlay">
                            <h4 className="card-title showtime__title text-capitalize">
                              <span className="btn-age">C16</span>
                              {movie.tenPhim}
                            </h4>
                            <p className="card-text mt-2">100 phút</p>
                          </div>
                          <div className="showtime__addToCart">
                            <a href="#" className="btn-default">
                              Mua vé
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    <div className="col" key={movie.maPhim}>
                      <div className="card showtime__card">
                        <div
                          className="showtime__image"
                          style={{
                            backgroundImage: `url('${movie.hinhAnh}')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="showtime__overlay">
                            <div className="btn-play">
                              <a
                                href={movie.trailer}
                                data-toggle="modal"
                                data-target={`#modal-${movie.maPhim}`}
                              >
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="card-body showtime__card__body">
                          <div className="showtime__content">
                            <h4 className="card-title showtime__title text-capitalize">
                              <span className="btn-age btn-age--general">
                                P
                              </span>
                              {movie.tenPhim}
                            </h4>
                            <p className="card-text mt-2">100 phút</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div id="carousel__trailer">
        {renderTrailer(movieList)}
        {renderTrailer(movieListUpComing)}
      </div>
    </section>
  );
};

export default ShowTime;
