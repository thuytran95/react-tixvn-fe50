import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { splitStringByHyphen } from "../../Helpers";
import { getScheduleTheaterSystemRequest } from "../../Redux/Actions/theater";

import "./style.scss";

const MovieSchedule = (props) => {
  const { theaterSchedule } = props;
  const listColor = [
    { maHeThongRap: "BHDStar", color: "#8bc541" },
    { maHeThongRap: "CGV", color: "red" },
    { maHeThongRap: "CineStar", color: "#df0d7a" },
    { maHeThongRap: "Galaxy", color: "#ff9800" },
    { maHeThongRap: "LotteCinima", color: "#ca4137" },
    { maHeThongRap: "MegaGS", color: "#9c9c9c" },
  ];

  const theaterList = theaterSchedule?.map((item) => {
    const maHeThongRap = item.maHeThongRap;
    const tenHeThongRap = item.tenHeThongRap;
    const logo = item.logo;
    return { maHeThongRap, tenHeThongRap, logo };
  });

  // goi thong tin ban dau
  useEffect(() => {
    props.dispatch(getScheduleTheaterSystemRequest());
  }, []);

  const [theaterID, setTheaterID] = useState({ maHeThongRap: "BHDStar" });
  const [color, setColor] = useState("#8bc541");
  const [theaterSystemList, setTheaterSystemList] = useState(null);

  useEffect(() => {
    const index = listColor.findIndex(
      (item) => item.maHeThongRap === theaterID.maHeThongRap
    );

    setColor(listColor[index].color);

    const theater_demo = theaterSchedule?.filter(
      (item) => item.maHeThongRap === theaterID.maHeThongRap
    );

    if (theater_demo && theater_demo.length > 0) {
      setTheaterSystemList(theater_demo[0].lstCumRap);
    }
  }, [theaterID]);

  const [theaterChild, setTheaterChild] = useState({ maCumRap: null });

  useEffect(() => {
    if (theaterSystemList) {
      setTheaterChild({ maCumRap: theaterSystemList[0].maCumRap });
    }
  }, [theaterSystemList]);

  const renderNameTheater = (name) => {
    const arr = splitStringByHyphen(name);
    return arr.map((item, index) => {
      return index === 0 ? (
        <span
          key={index}
          className="title__theater "
          style={{ color: color, fontWeight: 500 }}
        >
          {item}
        </span>
      ) : (
        <span key={index}>-{item}</span>
      );
    });
  };

  return (
    <div id="movie-schedule">
      <div className="container backgroundTop">
        <div className="row">
          <ul
            className="nav-tabs customscroll movie-schedule__tab col-12 col-sm-2"
            id="movie-schedule-tab"
            role="tablist"
          >
            {theaterList?.map((item, index) => {
              return (
                <li
                  key={item.maHeThongRap}
                  className="nav-item movie-schedule__tab__item"
                  onClick={() => {
                    setTheaterID({ maHeThongRap: item.maHeThongRap });
                  }}
                >
                  <a
                    className={`movie-schedule__tab__link nav-link ${
                      theaterID.maHeThongRap === item.maHeThongRap
                        ? "active"
                        : ""
                    }`}
                    id={`${item.maHeThongRap}-tab`}
                    data-toggle="tab"
                    href={`#${item.maHeThongRap}`}
                    role="tab"
                    aria-controls={item.maHeThongRap}
                  >
                    <img src={item.logo} alt={item.biDanh} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className="tab-content movie-schedule__tab__child col-12 col-sm-10"
            id="movie-schedule-tab-content"
          >
            <div className="row">
              <div
                className="tab-pane movie-schedule__child customscroll col-12 col-sm-2 fade active show"
                id={theaterID.maHeThongRap}
                role="tabpanel"
                aria-labelledby={`${theaterID.maHeThongRap}-tab`}
              >
                <ul
                  className="nav-tabs movie-schedule__child__tab"
                  id="movie-schedule-child-tab"
                  role="tablist"
                >
                  {theaterSystemList?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        id={item.maCumRap}
                        className="nav-item movie-schedule__child__item"
                        onClick={() => {
                          setTheaterChild({ maCumRap: item.maCumRap });
                        }}
                      >
                        <a
                          className={`movie-schedule__child__link nav-link ${
                            theaterChild.maCumRap === item.maCumRap
                              ? "active"
                              : ""
                          } `}
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                        >
                          <div className="image">
                            <img
                              src="./images/movie-schedule/cgv-general.jpg"
                              alt={item.maCumRap}
                            />
                          </div>
                          <div className="content">
                            <div
                              className={`title title__${theaterID.maHeThongRap}`}
                            >
                              {renderNameTheater(item.tenCumRap)}
                            </div>
                            <div className="desc">{item.diaChi}</div>
                            <input
                              className="btn-detail"
                              type="button"
                              defaultValue="[Chi tiết]"
                            />
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* danh sach phim */}
              <div
                className="tab-content movie-schedule__content customscroll col-12 col-sm-10"
                id="movie-schedule-content"
              >
                <div
                  className="tab-pane fade active show"
                  id="cgv-crescent-mall"
                  role="tabpanel"
                  aria-labelledby="cgv-crescent-mall-tab"
                >
                  <div className="movie-schedule__movie">
                    <div className="image">
                      <img
                        src="./images/movie-schedule/danh-cap-giac-mo-inception-14794516242347_60x60.jpg"
                        alt="Đánh Cắp Giấc Mơ - Inception"
                      />
                    </div>
                    <div className="content">
                      <div className="title">
                        <span className="btn-age">C16</span>Đánh Cắp Giấc Mơ -
                        Inception
                      </div>
                      <div className="desc">148 phút - TIX 0 - IMDb 8.8</div>
                    </div>
                    <div className="digital">2D Digital</div>
                    <div className="movie-schedule__showtimes">
                      <a className="btn-default" href="#">
                        <span>14:00</span> ~ 16:28
                      </a>
                      <a className="btn-default" href="#">
                        <span>15:10</span> ~ 17:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>17:10</span> ~ 19:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>18:20</span> ~ 20:48
                      </a>
                    </div>
                  </div>
                  <div className="movie-schedule__movie">
                    <div className="image">
                      <img
                        src="./images/movie-schedule/diep-vien-sieu-lay-my-spy-p-15959969936666_60x60.jpg"
                        alt="Điệp Viên Siêu Lầy - My Spy"
                      />
                    </div>
                    <div className="content">
                      <div className="title">
                        <span className="btn-age">C16</span>Điệp Viên Siêu Lầy -
                        My Spy
                      </div>
                      <div className="desc">148 phút - TIX 0 - IMDb 8.8</div>
                    </div>
                    <div className="digital">2D Digital</div>
                    <div className="movie-schedule__showtimes">
                      <a className="btn-default" href="#">
                        <span>14:00</span> ~ 16:28
                      </a>
                      <a className="btn-default" href="#">
                        <span>15:10</span> ~ 17:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>17:10</span> ~ 19:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>18:20</span> ~ 20:48
                      </a>
                    </div>
                  </div>
                  <div className="movie-schedule__movie">
                    <div className="image">
                      <img
                        src="./images/movie-schedule/ca-sau-tu-than-black-water-abyss-c18-15964423012362_60x60.jpg"
                        alt="Cá Sấu Tử Thần - Black Water: Abyss"
                      />
                    </div>
                    <div className="content">
                      <div className="title">
                        <span className="btn-age">C16</span>Cá Sấu Tử Thần -
                        Black Water: Abyss
                      </div>
                      <div className="desc">148 phút - TIX 0 - IMDb 8.8</div>
                    </div>
                    <div className="digital">2D Digital</div>
                    <div className="movie-schedule__showtimes">
                      <a className="btn-default" href="#">
                        <span>14:00</span> ~ 16:28
                      </a>
                      <a className="btn-default" href="#">
                        <span>15:10</span> ~ 17:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>17:10</span> ~ 19:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>18:20</span> ~ 20:48
                      </a>
                    </div>
                  </div>
                  <div className="movie-schedule__movie">
                    <div className="image">
                      <img
                        src="./images/movie-schedule/ham-quy-behind-you-c18-15976394035712_60x60.jpg"
                        alt="Hầm Quỷ - Behind You"
                      />
                    </div>
                    <div className="content">
                      <div className="title">
                        <span className="btn-age">C16</span>Hầm Quỷ - Behind You
                      </div>
                      <div className="desc">148 phút - TIX 0 - IMDb 8.8</div>
                    </div>
                    <div className="digital">2D Digital</div>
                    <div className="movie-schedule__showtimes">
                      <a className="btn-default" href="#">
                        <span>14:00</span> ~ 16:28
                      </a>
                      <a className="btn-default" href="#">
                        <span>15:10</span> ~ 17:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>17:10</span> ~ 19:38
                      </a>
                      <a className="btn-default" href="#">
                        <span>18:20</span> ~ 20:48
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theaterSchedule: state.theater.theaterSchedule,
  };
};

export default connect(mapStateToProps)(MovieSchedule);
