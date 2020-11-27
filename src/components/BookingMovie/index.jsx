import React from "react";
import "./style.scss";

const BookingMovie = () => {
  return (
    <div className="container">
      <div id="booking__movie">
        <div className="booking__movie">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="booking__movie__item booking__movie__name dropdown">
                <div className="options-container active customscroll ">
                  <div className="option">
                    <input type="radio" className="radio" id="1" name="movie" />
                    <label htmlFor="1">
                      Cá sấu tử thần - black water: Abyss - (C18)
                    </label>
                  </div>

                  <div className="option">
                    <input type="radio" className="radio" id="2" name="movie" />
                    <label htmlFor="2">Điệp viên siêu lầy - My spy (13)</label>
                  </div>

                  <div className="option">
                    <input type="radio" className="radio" id="3" name="movie" />
                    <label htmlFor="3">
                      Nội chiến siêu anh hùng - Captain America: Civil war
                      (NC16)
                    </label>
                  </div>

                  <div className="option">
                    <input type="radio" className="radio" id="4" name="movie" />
                    <label htmlFor="4">Mãi bên em - Endless - (C13)</label>
                  </div>
                  <div className="option">
                    <input type="radio" className="radio" id="5" name="movie" />
                    <label htmlFor="5">Big hero 6</label>
                  </div>
                  <div className="option">
                    <input type="radio" className="radio" id="6" name="movie" />
                    <label htmlFor="6">
                      Dinh thự oan khuất - Ghost of war - (C18)
                    </label>
                  </div>
                  <div className="option">
                    <input type="radio" className="radio" id="7" name="movie" />
                    <label htmlFor="7">
                      Hồn ma văn sĩ - Ghost writer - (C18)
                    </label>
                  </div>
                </div>
                <div class="selected">Phim</div>
                {/* <div className="dropdown__selected">Phim</div>
                <ul className="dropdown__menu customscroll">
                  <li id={1}>Cá sấu tử thần - black water: Abyss - (C18)</li>
                  <li id={2}>Điệp viên siêu lầy - My spy (13)</li>
                  <li id={3}>
                    Nội chiến siêu anh hùng - Captain America: Civil war (NC16)
                  </li>
                  <li id={4}>Mãi bên em - Endless - (C13)</li>
                  <li id={5}>Big hero 6</li>
                  <li id={6}>Dinh thự oan khuất - Ghost of war - (C18)</li>
                  <li id={7}>Hồn ma văn sĩ - Ghost writer - (C18)</li>
                  <li id={8}>Kẻ cuồng sát - Unhinged (C18)</li>
                  <li id={9}>Cậu bé người gỗ Pinocchio - Pinocchio - (P)</li>
                  <li id={10}>Chuyến du lịch chết chóc - outback - (C16)</li>
                  <li id={11}>Bán đảo - peninsula - (C18)</li>
                  <li id={12}>Tàn tích quỷ ám - relic - (C18)</li>
                  <li id={13}>Yêu nhau mùa ế - low season - (C16)</li>
                  <li id={14}>Cuộc phiêu lưu của scooby-doo! - scoob! - (P)</li>
                  <li id={15}>Ngôi đền kì quái - pee nak 2 - (C6)</li>
                </ul> */}
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
