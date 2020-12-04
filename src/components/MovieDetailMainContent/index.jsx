import React from "react";
import MovieDetailMainContentShowInfo from "../MovieDetailMainContentShowInfo";
import "./style.scss";
export default function MovieDetailMainContent() {
  return (
    <div className="movie__detail__main__content">
     
      <div className="movie__detail__main__content__info">
        <h3>Lịch Chiếu</h3>
        <h3>Thông tin</h3>
        <h3>Đánh giá</h3>
      </div>
      <div className="movie__detail__main__content__showinfo">
          <MovieDetailMainContentShowInfo/>
      </div>
    </div>
  );
}
