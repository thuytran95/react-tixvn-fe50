import { FETCH_CREDENTAIL } from "../Actions/type";

let initilState = {
  credential: null,
};

const UserReducer = (state = initilState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CREDENTAIL:
      return { ...state, credential: payload };
    default:
      return state;
  }
};

export default UserReducer;
