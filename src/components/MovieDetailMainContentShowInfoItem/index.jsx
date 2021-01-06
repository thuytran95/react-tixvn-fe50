import React,{useState} from "react";
import "./style.scss";
import cgvHungVuong from "../../assets/images/logos/cgv-hung-vuong-plaza-15380175133678.jpg";
import format from "date-format";
import {Link} from 'react-router-dom'
import { get } from "jquery";
export default function MovieDetailMainContentShowInfoItem(props) {
  const {tenCumRap,diaChi} = props.item
  const thongTinRap = props.time
  const maRap = props.maRap
  const ngayChieu =props.ngayChieu
  const gioRap = thongTinRap?.filter(function(obj) { return maRap.indexOf(obj.maRap) !== -1; });
  // console.log(gioRap);
  const [show,setShow] = useState(true);
  const showTimeMovie = ()=>{
    setShow(!show);
  }

  var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
 
console.log();
  

 
  const renderGioChieu = () =>{
    return gioRap.map((item,index)=>(
      <Link  to={`/checkout/${item.maLichChieu}`} key={index} className="mt-1"  target="_blank"><span>{  format('hh:mm', new Date(item.ngayChieuGioChieu)) }</span> ~ {format('hh:mm',new Date(add_minutes(new Date(item.ngayChieuGioChieu),item.thoiLuong).toString()))}</Link>
    ))
  }
  return (
    <div className="show__item__item ">
      <div onClick={()=> showTimeMovie()} className="show__item__item__media my-3">
        <div className="show__item__item__media__img">
          <img src={cgvHungVuong} alt="rap" />
        </div>

        <div  className="show__item__item__media__content">
          <h3>
            <span>{tenCumRap} </span>
          </h3>
          <p>{diaChi}</p>
        </div>
      </div>
      {show ?  <div className="show__item__item__type__time">
          <div className="d-flex justify-content-between">
          <h3>2D Digital</h3>
          <h3>{ format('dd/MM/yyyy', new Date(ngayChieu))}</h3>
          </div>
          {/* <a href="#"><span>11:00</span> ~ 12h40</a>
          <a href="#"><span>14:00</span> ~ 15h40</a> */}
          {renderGioChieu()}
      </div> : null}
    </div>
  );
}
