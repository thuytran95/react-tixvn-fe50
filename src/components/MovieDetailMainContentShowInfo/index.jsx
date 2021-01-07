import "./style.scss";
import React, { useState, useEffect } from "react";
import MovieDetailMainContentShowInfoItem from "../MovieDetailMainContentShowInfoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTheaterSystemListRequest } from "../../Redux/Actions/theater.action";
import format from "date-format";

export default function MovieDetailMainContentShowInfo(props) {
  const dispatch = useDispatch();

  // const [loading,setLoading] = useState(true)
  const lichChieu = useSelector((state) => state.movie?.movieDetail?.lichChieu);
  const listRap = useSelector((state) => state.theater?.theaterSystemList);
  const danhSachRap = useSelector((state) => state.theater?.theaterSchedule);
  const [activeNgay, setActiveNgay] = useState(0);
  const [activeRap, setActiveRap] = useState(0);

  const ngayChieuGioChieu = lichChieu?.map(
    (item) => format("MM/dd/yyyy", new Date(item.ngayChieuGioChieu))
    // item.ngayChieuGioChieu
  );
  const ngayChieu = ngayChieuGioChieu?.filter(
    (value, index, ngayChieuGioChieu) =>
      ngayChieuGioChieu.indexOf(value) === index
  );

  console.log(lichChieu);

  // rap
  const maRap = lichChieu?.map((item) => item.thongTinRap.maHeThongRap);
  const maRapNoRepeat = maRap?.filter(
    (value, index, maRap) => maRap.indexOf(value) === index
  );
  let rapCoPhim = danhSachRap?.filter(function (obj) {
    return maRapNoRepeat.indexOf(obj.maHeThongRap) !== -1;
  });

  // lịchpim
  useEffect(() => {
    if (activeRap) {
      dispatch(getTheaterSystemListRequest(rapCoPhim[activeRap]?.maHeThongRap));
    }
  }, [activeRap]);
  console.log(activeRap);

  // console.log(listRap);

  const thongTinRap = lichChieu?.filter(
    (item) =>
      format("MM/dd/yyyy", new Date(item.ngayChieuGioChieu)) ===
      ngayChieu[activeNgay]
  );
  // console.log(thongTinRap,"ss");
  const thongTinRapActive = thongTinRap?.map((item) => item.thongTinRap);
  const rapCoPhimActive = thongTinRapActive?.map((item) => item.maCumRap);
  const thongTinRapCoPhim = listRap?.filter(function (obj) {
    return rapCoPhimActive.indexOf(obj.maCumRap) !== -1;
  });
  const maCumRapThongTinPhim = thongTinRapCoPhim?.map((item) => item.maCumRap);
  const thongTinRapDuocChon = thongTinRapActive?.filter(function (obj) {
    return maCumRapThongTinPhim?.indexOf(obj.maCumRap) !== -1;
  });
  const listMaRapDuocChon = thongTinRapDuocChon?.map((item) => item.maRap);
  const listMaRapDuocChonKhongLap = listMaRapDuocChon?.filter(
    (value, index, listMaRapDuocChon) =>
      listMaRapDuocChon?.indexOf(value) === index
  );

  const layThuNgay = (ngay) => {
    switch (ngay) {
      case 0:
        return "Thứ 2";
      case 1:
        return "Thứ 3";
      case 2:
        return "Thứ 4";
      case 3:
        return "Thứ 5";
      case 4:
        return "Thứ 6";
      case 5:
        return "Thứ 7";
      case 6:
        return "Chủ nhật";

      default:
        return "";
        break;
    }
  };

  const activeNgayColor = (index, value) => {
    if (index === activeNgay) {
      return "show__info__movies__time__item show__info__movies__time__item__active";
    } else {
      return false;
    }
  };

  const activeRapColor = (index) => {
    if (index === activeRap) {
      return "row show__info__movies__pcinema__name show__info__movies__pcinema__name__active";
    } else {
      return false;
    }
  };

  const setActiveNgayColor = (index, value) => {
    setActiveNgay(index);
    console.log(value);
  };

  const renderNgayChieu = () => {
    return ngayChieu?.map((ngay, index) => (
      <div
        className={activeNgayColor(index) || "show__info__movies__time__item"}
        key={index}
        onClick={() => {
          setActiveNgayColor(index, ngay);
        }}
      >
        <p>{layThuNgay(new Date(ngay).getDay())}</p>
        <h6>{format("dd", new Date(ngay))}</h6>
      </div>
    ));
  };
  const setActiveRapColor = (index, value) => {
    setActiveRap(index);
    console.log(value);
  };

  const renderCumRapPhim = () => {
    return rapCoPhim?.map((item, index) => (
      <div
        className={
          activeRapColor(index) || "row show__info__movies__pcinema__name "
        }
        key={index}
        onClick={() => {
          setActiveRapColor(index, item.maHeThongRap);
        }}
      >
        <div className="col-xs-2 col-sm-2 col-md-4  show__info__movies__pcinema__name__logo">
          <img src={item.logo} alt="" />
        </div>

        <div className="col-xs-10 col-sm-10 col-md-8">
          <h4 className="">{item.tenHeThongRap}</h4>
        </div>
      </div>
    ));
  };
  const renderRapPhim = () => {
    return thongTinRapCoPhim?.map((item, index) => (
      <MovieDetailMainContentShowInfoItem
        item={item}
        time={thongTinRap}
        ngayChieu={ngayChieu[activeNgay]}
        maRap={listMaRapDuocChonKhongLap}
        key={index}
      />
    ));
  };

  return (
    <div className="show__info strollbar__bottom" id="showTimeDetail">
      <div className="show__info__movies pl-0 pl-md-3">
        <div className="container-fluid">
          <div className="row">
            <div className=" reponsive-2  col-sm-12 	col-md-3  ">
              {/* item1 */}
              {/* <div className="row show__info__movies__pcinema__name show__info__movies__pcinema__name__active">
                <div className="col-xs-2 col-sm-2  col-md-4  show__info__movies__pcinema__name__logo">
                  <img src={BdhStar} alt="" />
                </div>

                <div className="col-xs-10 col-sm-10 col-md-8">
                  <h4 className="">BHD Star Cineplex</h4>
                </div>
              </div> */}
              {/* item1 */}
              {renderCumRapPhim()}
            </div>
            <div className="col-sm-12 	col-md-9 pr-0  ">
              <div className="show__info__movies__time ">
                {/* <div className="show__info__movies__time__item show__info__movies__time__item__active">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div>
                <div className="show__info__movies__time__item">
                  <p>Thứ 2</p>
                  <h6>01</h6>
                </div> */}
                {renderNgayChieu()}
              </div>

              <div className="show__info__movies__list ">{renderRapPhim()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
