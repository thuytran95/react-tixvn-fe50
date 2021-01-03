import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import UserInfomation from "../UserInformation";
import Footer from "../Footer";
import Header from "../Header";
import { getInfomationUser } from "../../Redux/Actions/user.action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Fragment } from "react";
import Loader from "../Loader";
function Layout(props) {
  const dispatch = useDispatch();
  const [loading,setLoading]= useState(true);
  useEffect(()=>{
    // dispatch(getInfomationUser(taiKhoan));
    let user = JSON.parse(localStorage.getItem('User'));
    // console.log(user.taiKhoan);
    dispatch(getInfomationUser(user.taiKhoan,()=>{
      setLoading(false);
    },()=>{
      alert('lỗi rồi nè');
      // thông báo lỗi cho UI 
    }));
  },[])
  return (
    <Fragment>
    {loading? <Loader/>:<Fragment>
      <Header />
      <div className="row">
        <div  className="col-2 px-0">
          <UserInfomation />
        </div>
        <div className="col-10 px-0">
          {props.children}
        </div>
      </div>
      <Footer />
    </Fragment>}
    </Fragment>
  );
}

export default function LayoutUserTheme({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <Layout>
          <Component {...propsComponent} />
        </Layout>
      )}
    />
  );
}
