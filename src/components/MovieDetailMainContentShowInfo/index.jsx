import "./style.scss";
import React from "react";
import BdhStar from "../../assets/images/logos/f32670fd0eb083c9c4c804f0f3a252ed.png";
import MovieDetailMainContentShowInfoItem from "../MovieDetailMainContentShowInfoItem";

export default function MovieDetailMainContentShowInfo() {
  return (
    <div className="show__info strollbar__bottom">
      <div className="show__info__movies pl-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 ">
              {/* item1 */}
              <div className="row show__info__movies__pcinema__name show__info__movies__pcinema__name__active">
                <div className="col-4 show__info__movies__pcinema__name__logo">
                  <img src={BdhStar} alt="" />
                </div>

                <div className="col-8">
                  <h4>BHD Star Cineplex</h4>
                </div>
              </div>
              {/* item1 */}
              <div className="row show__info__movies__pcinema__name ">
                <div className="col-4 show__info__movies__pcinema__name__logo">
                  <img src={BdhStar} alt="" />
                </div>

                <div className="col-8">
                  <h4>BHD Star Cineplex</h4>
                </div>
              </div>
              {/* item1 */}
              <div className="row show__info__movies__pcinema__name ">
                <div className="col-4 show__info__movies__pcinema__name__logo">
                  <img src={BdhStar} alt="" />
                </div>

                <div className="col-8">
                  <h4>BHD Star Cineplex</h4>
                </div>
              </div>
              {/* item1 */}
              <div className="row show__info__movies__pcinema__name ">
                <div className="col-4 show__info__movies__pcinema__name__logo">
                  <img src={BdhStar} alt="" />
                </div>

                <div className="col-8">
                  <h4>BHD Star Cineplex</h4>
                </div>
              </div>
              {/* item1 */}
              <div className="row show__info__movies__pcinema__name ">
                <div className="col-4 show__info__movies__pcinema__name__logo">
                  <img src={BdhStar} alt="" />
                </div>

                <div className="col-8">
                  <h4>BHD Star Cineplex</h4>
                </div>
              </div>
            </div>
            <div className="col-9 pr-0  ">
              <div className="show__info__movies__time ">
                <div className="show__info__movies__time__item show__info__movies__time__item__active">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>
                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>

                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>

                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>

                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>

                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>

                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>
                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>
                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>
                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>
              </div>

              <div className="show__info__movies__list ">
                <MovieDetailMainContentShowInfoItem />
                <MovieDetailMainContentShowInfoItem />
                <MovieDetailMainContentShowInfoItem />
                <MovieDetailMainContentShowInfoItem />
                <MovieDetailMainContentShowInfoItem />
                <MovieDetailMainContentShowInfoItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
