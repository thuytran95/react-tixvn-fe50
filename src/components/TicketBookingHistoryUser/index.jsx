import React, { useState,useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import BookingSteatHistoryItem from "../BookSteatHistoryItem";
import Pagination from "../Pagination";
import format from 'date-format'

import "./style.scss";
export default function TicketBookingHistoryUser() {
  const thongTinDatVe =
    useSelector((state) => state?.user?.infomationUser?.thongTinDatVe) || "";
  const [show, setShow] = useState(false);
  const [post, setPost] = useState([]);
  const [currenPage, setCurrenPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const showBookingHistory = (index) => {
     setShow(!show);
  };

  useEffect(() => {
     setPost(thongTinDatVe)
  }, [])

  const indexOfLastPost = currenPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage;
  const currentPost = post.slice(indexOfFistPost,indexOfLastPost)
 

  const paginate = (pageNumber) => setCurrenPage(pageNumber)
  const nextPage = () => setCurrenPage(currenPage + 1) 
  const prevPage = () => setCurrenPage(currenPage > 1 ? currenPage - 1 : currenPage)

  const listGheDaDat = () => {
    return currentPost.map((item, index) => (
      <Fragment key={index}>
        <tr
          style={{ cursor: "pointer" }}
          onClick={() => {
            showBookingHistory();
          }}
        >
          <td>{item.maVe}</td>
          <td>{format('dd/MM/yyyy', new Date(item.ngayDat)) }</td>
          <td>{item.tenPhim}</td>
          <td>{item.giaVe}</td>
          <td>{item.thoiLuongPhim}</td>
        </tr>

        {show  ? <>
        <tr>
          <td colSpan="5">
           
            <BookingSteatHistoryItem booking={item.danhSachGhe} />
          </td>
        </tr>
        </> : null}
      </Fragment>
    ));
  };



  // const gheDaDat = Object.keys(danhSachGhe[0]).map((key,index)=>[danhSachGhe[0][key]["maCumRap"],danhSachGhe[0][key]["maHeThongRap"]])

  // console.log("thongtindatve :",b);
  // const { maLoaiNguoiDung } = useSelector((state) => state?.user?.data) || "";
  return (
    <div className="tiket__booking__history">
      <h4 className="text-center"> lịch sử đặt vé</h4>
      <div className="tiket__booking__history__content">
        <div className="tiket__booking__history__content__table">
        <table className="table table-striped table-dark  table-hover text-center">
          <thead className="thead-dark">
            <tr>
              <th>Mã Vé</th>
              <th>Ngày Đặt</th>
              <th>Tên Phim</th>
              <th>Giá Vé</th>
              <th>Thời Lượng Phim</th>
            </tr>
          </thead>
          <tbody>{listGheDaDat()}</tbody>
        </table>
        </div>
        <Pagination postsPerPage={postsPerPage} totalPost={post.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
      </div>
    </div>
  );
}
