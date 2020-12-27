import React from "react";
import { useState } from "react";
import { renderNameTheater } from "../../Helpers";
import arrow from "../../assets/images/logos/next-session.png";
import "./style.scss";

function ScheduleMobileItem(props) {
  const { lstCumRap, maHeThongRap, logo, tenHeThongRap } = props.theaterSystem;
  const listColor = [
    { maHeThongRap: "BHDStar", color: "#8bc541" },
    { maHeThongRap: "CGV", color: "red" },
    { maHeThongRap: "CineStar", color: "#df0d7a" },
    { maHeThongRap: "Galaxy", color: "#ff9800" },
    { maHeThongRap: "LotteCinima", color: "#ca4137" },
    { maHeThongRap: "MegaGS", color: "#9c9c9c" },
  ];

  const [toggle, setToggle] = useState(false);

  const setColor = listColor.filter(
    (color) => color.maHeThongRap === maHeThongRap
  )[0].color;

  return (
    <div className="col-12">
      <a
        className="schedule__mobile__wrapper"
        data-toggle="collapse"
        role="button"
        href={`#${maHeThongRap}`}
        onClick={() => setToggle(!toggle)}
      >
        <img src={logo} alt="logo" />
        <p className="schedule__mobile__title">
          {tenHeThongRap}
          {maHeThongRap === "BHDStar" ? (
            <p className="subscription">x3 vé BHD Star 59k/vé</p>
          ) : (
            ""
          )}
        </p>
        <img
          className={`arrow ${toggle ? "expand" : ""}`}
          src={arrow}
          alt="arrow"
        />
      </a>
      <div className="line"></div>
      <div id={maHeThongRap} className="collapse hide">
        <ul className="schedule__mobile__list">
          {lstCumRap.map((item, index) => {
            const { maCumRap, tenCumRap, diaChi } = item;
            return (
              <li className="schedule__mobile__child" key={index}>
                <a className="schedule__mobile__link">
                  <div className="image">
                    <img
                      src={`./images/movie-schedule/${maHeThongRap}-mobile.jpg`}
                      alt="hinh-anh"
                    />
                  </div>
                  <div className="content">
                    <div className="title">
                      {renderNameTheater(tenCumRap, setColor)}
                    </div>
                    <div className="desc">{diaChi}</div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default ScheduleMobileItem;
