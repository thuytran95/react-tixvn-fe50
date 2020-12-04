import React from "react";
import MovieDetailMainContent from "../MovieDetailMainContent";
import MovieDetailMainInfo from "../MovieDetailMainInfo";
import  './style.scss'

export default function MovieDetailMainTop() {
  return (
    <div className="movie__detail__top">
      <img className="movie__detail__top__bg"
        src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16016223447390.png"
        alt="moviedetail"
      />
    <div className="movie__detail__top__styleGradient">

    </div>
    <div className="movie__detail__top__info d-flex flex-row justify-content-center align-items-center">
    <MovieDetailMainInfo/>
 
    </div>
 
   
    </div>

  );
}
