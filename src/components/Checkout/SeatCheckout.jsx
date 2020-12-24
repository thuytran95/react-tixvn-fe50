import React,{useState} from "react";
import ListSeatCheckOut from "../ListSeatCheckout";
import "./SeatCheckout.scss";

const SeatCheckout = ({ tenCumRap, ngayChieu, tenRap, danhSachGhe }) => {
  // let [min, setMin] = useState(5);
  // let [second, setSecond] = useState(0);
  // const [active,setActive] = useState([style ="list__seat__item list__seat__item__active",disable =  true]);
  // const [vip,setVip] = useState(["list__seat__item list__seat__item__vip",false]);
  // const [selected,setSelected] = useState(["list__seat__item list__seat__item__selected",false]);
  const active = "list__seat__item list__seat__item__active list__seat__item__cursor"
  const notVip = "list__seat__item  list__seat__item__cursor"
  const selected = "list__seat__item list__seat__item__selected list__seat__item__cursor"
  const vip = "list__seat__item list__seat__item__vip list__seat__item__cursor"
  const vipSeat = "list__seat__item list__seat__item__vip"
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
          <div className="d-flex justify-content-center">
            <div className="listSeat mt-1 d-flex justify-align-content-between">
              {/* <div style={{ margin: "auto", textAlign: "left" }}>
              {renderSeat()}
            </div> */}
              <div className="d-inline-block listSeat__title">
                <h4>A</h4>
                <h4>B</h4>
                <h4>C</h4>
                <h4>D</h4>
                <h4>E</h4>
                <h4>F</h4>
                <h4>G</h4>
                <h4>H</h4>
                <h4>I</h4>
              </div>
              <div className="listSeat__content">
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut props={vipSeat}/>
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
                <ListSeatCheckOut />
              </div>
            </div>
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <div  className="listSeat__description d-flex justify-content-around">
              <div >
                <ListSeatCheckOut props={notVip}/>
                <p>Ghế thường</p>
              </div>
              <div>
                <ListSeatCheckOut props={vip}/>
                <p>Ghế vip</p>
              </div>
              <div>
                <ListSeatCheckOut props={active}/>
                <p>Đang chọn</p>
              </div>
              <div>
                <ListSeatCheckOut props={selected} />
                <p>Ghế đã có người chọn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatCheckout;
