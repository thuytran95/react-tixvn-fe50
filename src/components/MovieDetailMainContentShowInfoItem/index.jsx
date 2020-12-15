import React,{useState} from "react";
import "./style.scss";
import cgvHungVuong from "../../assets/images/logos/cgv-hung-vuong-plaza-15380175133678.jpg";
export default function MovieDetailMainContentShowInfoItem() {
  const [show,setShow] = useState(false);
  const showTimeMovie = ()=>{
    setShow(!show);
  }
  return (
    <div className="show__item__item ">
      <div onClick={()=> showTimeMovie()} className="show__item__item__media my-3">
        <div className="show__item__item__media__img">
          <img src={cgvHungVuong} alt="rap" />
        </div>

        <div  className="show__item__item__media__content">
          <h3>
            <span>BHD Star </span> - Vincom 3/2
          </h3>
          <p>L5-Vincom 3/2, 3C Đường 3/2, Q.10</p>
        </div>
      </div>
      {show ?  <div className="show__item__item__type__time">
          <h3>2D Digital</h3>
          <a href="#"><span>11:00</span> ~ 12h40</a>
          <a href="#"><span>14:00</span> ~ 15h40</a>
      </div> : null}
    </div>
  );
}
