import React, { Component } from "react";
import './style.scss'

export default class MovieDetailInformation extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row ">
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-6 movie__detail_information_title">
                <p>Ngày công chiếu</p>
                <p>Đạo diển</p>
                <p>Diễn viên</p>
                <p>Thể loại</p>
                <p>Định dạng</p>
                <p>Quốc gia sx</p>
              </div>
              <div className="col-6 movie__detail_information_title">
              <p>  <span>11.12.2020</span></p>
               <p> <span>Đức Mạnh</span></p>
             <p>   <span>Đức Mạnh</span></p>
               <p> <span>Anime</span></p>
               <p> <span>2D/Digital</span></p>
              <p>  <span>Nhật Bản</span></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 movie__detail_information_title">
            <p>Nội dung</p>
            <p>
              <span>
                Kamado Tanjiro cùng quân đoàn Diệt quỷ đi cùng với Viêm trụ
                Rengoku Kyōjurō để điều tra những vụ mất tích đầy bí ẩn xay ra
                trên một chuyến tàu. Tuy nhiên, họ không biết rằng tại đây có
                một cái bẫy đang chờ đón họ.
              </span>
            </p>
            <p>
              <span>Liệu kết cục sẽ như thế nào?</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
