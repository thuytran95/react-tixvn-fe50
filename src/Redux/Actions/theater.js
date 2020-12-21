import { createAction } from ".";
import { theaterService } from "../../Service";
import {
  GET_SCHEDULE_THEATER_SYSTEM_FAILED,
  GET_SCHEDULE_THEATER_SYSTEM_SUCCESS,
} from "./type";

export const getScheduleTheaterSystemRequest = () => {
  return (dispatch) => {
    theaterService
      .getScheduleTheaterSystem()
      .then((res) => {
        console.log(res.data);
        dispatch(createAction(GET_SCHEDULE_THEATER_SYSTEM_SUCCESS, res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(createAction(GET_SCHEDULE_THEATER_SYSTEM_FAILED, err));
      });
  };
};
