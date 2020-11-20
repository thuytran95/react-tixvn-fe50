import React from "react";

<<<<<<< HEAD
const MovieItem = ({ movie }) => {
  console.log(movie);
  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={movie.hinhAnh} alt={movie.tenPhim} />
        <div className="card-body">
          <h4 className="card-title">{movie.tenPhim}</h4>
          <p className="card-text">Text</p>
=======
const MovieItem = (props) => {
  console.log(props.movie);
  return (
    <div className="showstime__wrapper">
      <div className="showstime__wrapper__img">
        <img src="./images/showstime/diep-vien-sieu-lay-my-spy-p-15959969936666_215x318.png" />
        <span className="showstime__wrapper__earlyshowing btn-default">
          Xuất Chiếu Sớm
        </span>
        <div className="showstime__wrapper__prebooked">
          <img src="./images/showstime/film_type_3.png" />
        </div>
        <div className="showstime__wrapper__overlay">
          <div className="btn-play">
            <a href="#">
              <i className="fa fa-play" />
            </a>
          </div>
        </div>
        <div className="showstime__wrapper__star">
          <p>8.2</p>
          <p className="showstime__wrapper__star__list">
            <img src="./images/showstime/star1.png" />
            <img src="./images/showstime/star1.png" />
            <img src="./images/showstime/star1.png" />
            <img src="./images/showstime/star1.png" />
            <img src="./images/showstime/star1.2.png" />
          </p>
        </div>
      </div>
      <div className="showstime__wrapper__content">
        <div className="showstime__content__title">
          <span className="filmAge">C13</span>
          Điệp Viên Siêu Lầy - My Spy - (13)
        </div>
        <div className="showstime__content__time">
          <p> 100 phút</p>
        </div>
        <div className="showstime__content__overlay">
          <a href="#" className="btn-default">
            MUA VÉ
          </a>
>>>>>>> c327ddb155d3f96f6805deb215ff61e718d2012f
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
