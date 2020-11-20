import React from "react";

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
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
