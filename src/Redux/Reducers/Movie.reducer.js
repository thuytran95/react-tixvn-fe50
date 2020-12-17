import {
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_SUCCESS,
} from "../Actions/type";

let initialState = {
  movieList: [],
  movieDetail: null,
};

const MovieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIE_LIST_SUCCESS: {
      state.movieList = payload;
      return { ...state };
    }
    case GET_MOVIE_DETAIL_SUCCESS: {
      state.movieDetail = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default MovieReducer;
