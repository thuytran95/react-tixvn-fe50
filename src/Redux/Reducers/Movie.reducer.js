import { FETCH_MOVIE_SHOWING } from "../Actions/type";

let initialState = {
  movieList: [],
  movieDetail: null,
};

const MovieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIE_SHOWING: {
      state.movieList = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default MovieReducer;
