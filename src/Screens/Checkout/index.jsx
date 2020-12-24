import Axios from "axios";
import React, { useEffect, useState } from "react";
import DetailCheckout from "../../components/Checkout/DetailCheckout";
import LeftCheckout from "../../components/Checkout/LeftCheckout";
import SeatCheckout from "../../components/Checkout/SeatCheckout";
import StepCheckout from "../../components/Checkout/StepCheckout";
import "./style.scss";

const Checkout = () => {
  // "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=15239";

  let [image, setImage] = useState("");
  let [totalCost, setTotalCost] = useState(0);
  let [diaChi, setDiaChi] = useState("");
  let [gioChieu, setGioChieu] = useState("");
  let [maLichChieu, setMaLichChieu] = useState("");
  let [ngayChieu, setNgayChieu] = useState("");
  let [tenCumRap, setTenCumRap] = useState("");
  let [tenPhim, setTenPhim] = useState("");
  let [tenRap, setTenRap] = useState("");
  let [danhSachGhe, setDanhSachGhe] = useState("");

  // Axios({
  //   method: "GET",
  //   url:
  //     "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=15239",
  // })
  //   .then((res) => {
  //     setImage(res.data.thongTinPhim.hinhAnh);
  //     setDiaChi(res.data.thongTinPhim.diaChi);
  //     setGioChieu(res.data.thongTinPhim.gioChieu);
  //     setMaLichChieu(res.data.thongTinPhim.maLichChieu);
  //     setNgayChieu(res.data.thongTinPhim.ngayChieu);
  //     setTenCumRap(res.data.thongTinPhim.tenCumRap);
  //     setTenPhim(res.data.thongTinPhim.tenPhim);
  //     setTenRap(res.data.thongTinPhim.tenRap);
  //     setDanhSachGhe(res.data.danhSachGhe);
  //     // console.log(res.data);
  //   })
  //   .catch((error) => console.log(error));

  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=15239",
    })
      .then((res) => {
        setImage(res.data.thongTinPhim.hinhAnh);
        setDiaChi(res.data.thongTinPhim.diaChi);
        setGioChieu(res.data.thongTinPhim.gioChieu);
        setMaLichChieu(res.data.thongTinPhim.maLichChieu);
        setNgayChieu(res.data.thongTinPhim.ngayChieu);
        setTenCumRap(res.data.thongTinPhim.tenCumRap);
        setTenPhim(res.data.thongTinPhim.tenPhim);
        setTenRap(res.data.thongTinPhim.tenRap);
        setDanhSachGhe(res.data.danhSachGhe);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Checkout">
      <StepCheckout />
      <DetailCheckout
        totalCost={totalCost}
        gioChieu={gioChieu}
        ngayChieu={ngayChieu}
        tenCumRap={tenCumRap}
        tenPhim={tenPhim}
        tenRap={tenRap}
      />
      <LeftCheckout image={image} />
      <SeatCheckout
        tenCumRap={tenCumRap}
        ngayChieu={ngayChieu}
        tenRap={tenRap}
        danhSachGhe={danhSachGhe}
      />
    </div>
  );
};

export default Checkout;
