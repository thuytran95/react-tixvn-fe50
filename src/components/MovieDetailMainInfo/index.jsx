import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function MovieDetailMainInfo(props) {
  const [isOpen, setOpen] = useState(false);
  const movieDetail = props.movieDetail;
  const trailer = movieDetail?.trailer;

  function youtube_parser(url = " ") {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  return (
    <div className="movie__detail__main__top d-flex flex-row">
      <div className="movie__detail__main__top__right">
        <div className="movie__detail__main__top__right__poster">
          <div className="movie__detail__main__top__right__poster__image">
            <img src={movieDetail?.hinhAnh} alt={movieDetail?.biDanh} />
          </div>

          <div className="movie__detail__main__top__right__poster__icon">
            <i onClick={() => setOpen(true)} className="fa fa-play"></i>
          </div>
          {/* modal video */}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={youtube_parser(trailer)}
            onClose={() => setOpen(false)}
          />
        </div>
        <div className="movie__detail__main__top__right__content ml-3">
          <p>23.10.2020</p>
          <h3>
            <span>C18</span> {"  "}
            {movieDetail?.tenPhim}
          </h3>
          <p>
            {movieDetail?.lichChieu[0]?.thoiLuong} phút - 0 IMDb - 2D/Digita
          </p>
          <NavLink exact to="#showTimeDetail">
            <button type="button" className="mt-2">
              Mua Vé
            </button>
          </NavLink>
        </div>
      </div>
      <div className="movie__detail__main__top__right__box">
        <div className="movie__detail__main__top__right__box__percent">
          <svg>
            <circle cx="55" cy="55" r="55"></circle>
            <circle cx="55" cy="55" r="55"></circle>
          </svg>
        </div>
        <div className="movie__detail__main__top__right__box__number">
          <span>9.3</span>
        </div>
        <div className="movie__detail__main__top__right__box__star">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <span>&#189;</span>
        </div>
        <p>258 người đánh giá</p>
      </div>
    </div>
  );
}
