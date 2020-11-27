import { FETCH_MOVIE_SHOWING, FETCH_MOVIE_UPCOMING } from "../Actions/type";

let initialState = {
  movieList: [],
  movieListUpComing: [],
  movieDetail: null,
};

const MovieReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case FETCH_MOVIE_SHOWING: {
      state.movieList = payload;
      return { ...state };
    }
    case FETCH_MOVIE_UPCOMING: {
      state.movieListUpComing = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default MovieReducer;
