import React from "react";
import "./SeatCheckout.scss";

const SeatCheckout = ({ tenCumRap, ngayChieu, tenRap, danhSachGhe }) => {
  // let [min, setMin] = useState(5);
  // let [second, setSecond] = useState(0);

  const renderSeat = () => {
    // console.log(danhSachGhe);
    // console.log(typeof danhSachGhe)
  };

  // console.log(typeof danhSachGhe)

  return (
    <div className="SeatCheckout">
      <div className="SeatCheckout__topContent">
        <div className="SeatCheckout__topContent__leftTitle">
          <div className="logoCinema">
            <img
              className="logo"
              src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
              alt="logo"
            />
          </div>
          <div className="contentCinema">
            <p className="address">{tenCumRap}</p>
            <p className="hour">
              {ngayChieu} - {tenRap}
            </p>
          </div>
        </div>
        <div className="SeatCheckout__topContent__rightTitle">
          <p className="info1">thời gian giữ ghế</p>
          <p className="info2">
            <span className="minute"></span>
            <span className="second"></span>
          </p>
        </div>
      </div>
      <div className="SeatCheckout__seatMap">
        <div className="SeatCheckout__seatMap__room">
          <div className="screen">
            <div className="namescreen">
              <img
                src="https://tix.vn/app/assets/img/icons/screen.png"
                alt=""
              />
            </div>
          </div>
          <div className="listSeat">
            <div style={{ margin: "auto", textAlign: "left" }}>
              {renderSeat()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatCheckout;
