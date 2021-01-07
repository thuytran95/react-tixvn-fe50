import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailCheckout from "../../components/Checkout/DetailCheckout";
import LeftCheckout from "../../components/Checkout/LeftCheckout";
import SeatCheckout from "../../components/Checkout/SeatCheckout";
import StepCheckout from "../../components/Checkout/StepCheckout";
import Loader from '../../components/Loader'
import "./style.scss";
import { useParams } from "react-router-dom";
import {getBookingRequest} from '../../Redux/Actions/booking.action'


const Checkout = () => {

  const dispatch = useDispatch();
  
  const [loading,setLoading] = useState(true)

  const { maLichChieu } = useParams();


   // chỉ chạy 1 lần duy nhất khi commonent đc gọi
   useEffect(function () {
    //   dispastch action để tương tác vs api
    dispatch(getBookingRequest(maLichChieu,()=>{setLoading(false)},()=>{alert("lỗi rồi !")}));
  }, []);

 


  return (
    <>
       {loading ? <Loader/> : 
      <div className="Checkout">
      <StepCheckout />
      <DetailCheckout
      
      />
      <LeftCheckout />
      <SeatCheckout
       
       
      />
    </div>
    }
    </>
  );
};

export default Checkout;
