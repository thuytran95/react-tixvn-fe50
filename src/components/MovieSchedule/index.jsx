import React from "react";
import "./style.scss";

const MovieShedule = () => {
  return (
    <div id="movie-schedule" className="movie-schedule">
      <div className="container backgroundTop">
        <div className="row">
          <ul
            className="nav-tabs customscroll movie-schedule__tab col-12 col-sm-2"
            id="movie-schedule-tab"
            role="tablist"
          >
            <li id={1} className="nav-item movie-schedule__tab__item">
              <a
                className="movie-schedule__tab__link nav-link active"
                id="cgv-tab"
                data-toggle="tab"
                href="#cgv"
                role="tab"
                aria-controls="cgv"
                aria-selected="true"
              >
                <img
                  className="cinema-logo"
                  //   style={{ width: 50 }}
                  src="./images/logos/cgv.png"
                  alt="CGV"
                />
              </a>
            </li>
            <li id={23} className="nav-item movie-schedule__tab__item">
              <a
                className="movie-schedule__tab__link nav-link"
                id="dcine-ben-thanh-tab"
                data-toggle="tab"
                href="#dcine-ben-thanh"
                role="tab"
                aria-controls="dcine-ben-thanh"
                aria-selected="true"
              >
                <img
                  className="cinema-logo"
                  src="./images/logos/dcine.png"
                  alt="DCINE Bến Thành"
                />
              </a>
            </li>
            <li id={24} className="nav-item movie-schedule__tab__item">
              <a
                className="movie-schedule__tab__link nav-link"
                id="ddc-dong-da-tab"
                data-toggle="tab"
                href="#ddc-dong-da"
                role="tab"
                aria-controls="ddc-dong-da"
                aria-selected="true"
              >
                <img
                  className="cinema-logo"
                  src="./images/logos/dongdacinema.png"
                  alt="DDC - Đống Đa"
                />
              </a>
            </li>
            <li id={40} className="nav-item movie-schedule__tab__item">
              <a
                className="movie-schedule__tab__link nav-link"
                id="mega-gs-cao-thang-tab"
                data-toggle="tab"
                href="#mega-gs-cao-thang"
                role="tab"
                aria-controls="mega-gs-cao-thang"
                aria-selected="true"
              >
                <img
                  className="cinema-logo"
                  src="./images/logos/megags.png"
                  alt="Mega GS Cao Thắng"
                />
              </a>
            </li>
            <li id={43} className="nav-item movie-schedule__tab__item">
              <a
                className="movie-schedule__tab__link nav-link"
                id="galaxy-tab"
                data-toggle="tab"
                href="#galaxy"
                role="tab"
                aria-controls="galaxy"
                aria-selected="true"
              >
                <img
                  className="cinema-logo"
                  src="./images/logos/galaxycine.png"
                  alt="Galaxy"
                />
              </a>
            </li>
            <li id={44} className="nav-item movie-schedule__tab__item">
              <a
                className="movie-schedule__tab__link nav-link"
                id="lotte-cinema-tab"
                data-toggle="tab"
                href="#lotte-cinema"
                role="tab"
                aria-controls="lotte-cinema"
                aria-selected="true"
              >
                <img
                  className="cinema-logo"
                  src="./images/logos/lotte.png"
                  alt="Lotte Cinema"
                />
              </a>
            </li>
            <li id={45} className="nav-item movie-schedule__tab__item">
              <a
                className="movie-schedule__tab__link nav-link"
                id="cinestar-tab"
                data-toggle="tab"
                href="#cinestar"
                role="tab"
                aria-controls="cinestar"
                aria-selected="true"
              >
                <img
                  className="cinema-logo"
                  src="./images/logos/cinestar.png"
                  alt="CineStar"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieShedule;
