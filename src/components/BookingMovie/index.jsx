import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const BookingMovie = () => {
  const [isActive, setIsActive] = useState(false);
  const [checked, setChecked] = useState({
    id: null,
    name: "movie",
    lableTag: "Phim",
  });
  // const dispatch = useDispatch();
  // console.log(dispatch);
  // const movieList = useSelector(state => sta)
  return (
    <div className="container">
      <div id="booking__movie">
        <div className="booking__movie">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="booking__movie__item booking__movie__name dropdown">
                <div
                  className={`options-container customscroll ${
                    isActive ? "active" : null
                  }`}
                  onClick={() => setIsActive(false)}
                >
                  <div
                    className="option"
                    onClick={() =>
                      setChecked({
                        id: 1,
                        lableTag:
                          " Cá sấu tử thần - black water: Abyss - (C18)",
                      })
                    }
                  >
                    <input type="radio" className="radio" id="1" name="movie" />
                    <label htmlFor="1">
                      Cá sấu tử thần - black water: Abyss - (C18)
                    </label>
                  </div>

                  <div
                    className="option"
                    onClick={() =>
                      setChecked({
                        id: 2,
                        lableTag: "Điệp viên siêu lầy - My spy (13) ",
                      })
                    }
                  >
                    <input type="radio" className="radio" id="2" name="movie" />
                    <label htmlFor="2">Điệp viên siêu lầy - My spy (13)</label>
                  </div>

                  <div
                    className="option"
                    className="option"
                    onClick={() =>
                      setChecked({
                        id: 3,
                        lableTag:
                          "  Nội chiến siêu anh hùng - Captain America: Civil war (NC16)",
                      })
                    }
                  >
                    <input type="radio" className="radio" id="3" name="movie" />
                    <label htmlFor="3">
                      Nội chiến siêu anh hùng - Captain America: Civil war
                      (NC16)
                    </label>
                  </div>

                  <div className="option">
                    <input
                      type="radio"
                      className="radio"
                      id="4"
                      name="movie"
                      onClick={() =>
                        setChecked({
                          id: 4,
                          lableTag: "Mãi bên em - Endless - (C13)",
                        })
                      }
                    />
                    <label htmlFor="4">Mãi bên em - Endless - (C13)</label>
                  </div>
                  <div
                    className="option"
                    onClick={() =>
                      setChecked({
                        id: 5,
                        lableTag: "Big hero 6",
                      })
                    }
                  >
                    <input type="radio" className="radio" id="5" name="movie" />
                    <label htmlFor="5">Big hero 6</label>
                  </div>
                  <div
                    className="option"
                    onClick={() =>
                      setChecked({
                        id: 6,
                        lableTag: " Dinh thự oan khuất - Ghost of war - (C18)",
                      })
                    }
                  >
                    <input type="radio" className="radio" id="6" name="movie" />
                    <label htmlFor="6">
                      Dinh thự oan khuất - Ghost of war - (C18)
                    </label>
                  </div>
                  <div
                    className="option"
                    onClick={() =>
                      setChecked({
                        id: 7,
                        lableTag: " Hồn ma văn sĩ - Ghost writer - (C18)",
                      })
                    }
                  >
                    <input type="radio" className="radio" id="7" name="movie" />
                    <label htmlFor="7">
                      Hồn ma văn sĩ - Ghost writer - (C18)
                    </label>
                  </div>
                </div>
                <div
                  className="selected"
                  onClick={() => setIsActive(!isActive)}
                >
                  {checked.lableTag.length < 45
                    ? checked.lableTag
                    : checked.lableTag.substring(0, 45)}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__cimena dropdown">
                <div className="dropdown__selected">Rạp</div>
                <ul className="dropdown__menu customscroll"></ul>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__datepick dropdown">
                <div className="dropdown__selected">Ngày xem</div>
                <ul className="dropdown__menu customscroll"></ul>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__showtimes dropdown">
                <div className="dropdown__selected">Suất chiếu</div>
                <ul className="dropdown__menu customscroll"></ul>
              </div>
            </div>
            <div className="col-12 col-sm-2">
              <div className="booking__movie__item booking__movie__book dropdown">
                <input
                  className="btn-default"
                  type="button"
                  defaultValue="Mua vé ngay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingMovie;
