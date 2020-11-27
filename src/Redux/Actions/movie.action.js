import { createAction } from ".";
import { movieService } from "../../Service";
import { FETCH_MOVIE_SHOWING, FETCH_MOVIE_UPCOMING } from "./type";

export const fetchMovieList = () => {
  return (dispatch) => {
    movieService
      .fetchMovieShowing()
      .then((res) => {
        // console.log(res.data);
        dispatch(createAction(FETCH_MOVIE_SHOWING, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchMovieComing = () => {
  return (dispatch) => {
    movieService
      .fetchMovieUpComing()
      .then((res) => {
        console.log(res.data);
        dispatch(createAction(FETCH_MOVIE_UPCOMING, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
