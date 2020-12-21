import { GET_SCHEDULE_THEATER_SYSTEM_SUCCESS } from "../Actions/type";
let initialState = {
  theaterSchedule: null,
};

const TheaterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SCHEDULE_THEATER_SYSTEM_SUCCESS: {
      return { ...state, theaterSchedule: payload };
    }

    default:
      return state;
  }
};

export default TheaterReducer;
