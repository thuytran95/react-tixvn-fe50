import React from "react";
import "./style.scss";

export default function MovieDetailMainInfo() {
  return (
    <div className="movie__detail__main__top d-flex flex-row">
      <div className="movie__detail__main__top__right">
        <div className="movie__detail__main__top__right__poster">
      
         <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/tiec-trang-mau-blood-moon-party-16016226514166_215x318.png" alt="ss"/>
      
          <div className="movie__detail__main__top__right__poster__icon">
            
          <i class="fa fa-play"></i>
          </div>
        </div>
        <div className="movie__detail__main__top__right__content ml-3">
          <p>23.10.2020</p>
          <h3>
            <span >
              C18
            </span>{" "}
            Tiệc Trăng Máu - Blood Moon Party
          </h3>
          <p>100 phút - 0 IMDb - 2D/Digita</p>
          <button type="button" className="mt-2">
            Mua Vé
          </button>
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
