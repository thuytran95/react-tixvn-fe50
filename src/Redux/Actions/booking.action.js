import { createAction } from "./index";
// import moduleName from '../../Service/booking'
import Axios from "axios";
import { GET_BOOKING_SUCCESS, GET_BOOKING_FAILED, CHOOSE_SEAT } from "./type";
import {} from 'react-router-dom'
export function getBookingRequest(maLichChieu) {
  //hàm chiệu trách nhiệm xữ lý bất đồng bộ
  return async (dispatch) => {
    //call api
    try {
      // request
      //   await là đợi các tác vụ bất đồng bộ thực hiên xong
      const res = await Axios.get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
      );
      // console.log("res", res);
      // success
      if (res.status === 200 || res.status === 201) {
        //dispatch lên reducer

        dispatch(createAction(GET_BOOKING_SUCCESS, res.data));
      }
    } catch (error) {
      //failed
      console.log(error);
      //dispatch lên reducer

      dispatch(createAction(GET_BOOKING_FAILED, error));
    }
  };
}

// đăt vế
export function postBookingRequest(maLichChieu, danhSachVe,history) {
  return async function (dispatch) {
    try {
      // get local
      const user = JSON.parse(localStorage.getItem("user"));
      // call api
      const res = await Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        alert("thành công");
        history.push("/home");
      }
      // success
    } catch (error) {
      //
    }
  };
}

