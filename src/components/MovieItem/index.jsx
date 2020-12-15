import React from "react";
import { capitalizeWords } from "../../Helpers";
import "./style.scss";

export default function MovieItem(props) {
  const movie = props.movie;

  return (
    <div className="col mvshowtime" key={movie.maPhim}>
      <div className="card mvshowtime__card">
        <div
          className="mvshowtime__image"
          style={{
            backgroundImage: `url('${movie.hinhAnh}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        >
          <div className="mvshowtime__overlay">
            <div className="btn-play">
              <a
                href={movie.trailer}
                data-toggle="modal"
                data-target="#modal-showtime"
                onClick={() => {
                  console.log(movie.trailer);
                  return props.handleModal(movie.trailer);
                }}
              >
                <i className="fa fa-play" />
              </a>
            </div>
          </div>
          <div className="mvshowtime__rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />

            <span>({movie.danhGia})</span>
          </div>
        </div>

        <div className="card-body mvshowtime__card__body">
          <div className="mvshowtime__content mvshowtime__content__overlay">
            <h4 className="card-title mvshowtime__title text-capitalize">
              <span className="btn-age">C16</span>
              {capitalizeWords(movie.tenPhim)}
            </h4>
            <p className="card-text mt-2">100 phút</p>
          </div>
          <div className="mvshowtime__addToCart">
            <a href="#" className="btn-default">
              Mua vé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
