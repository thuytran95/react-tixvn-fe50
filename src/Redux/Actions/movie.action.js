import { createAction } from ".";
import { movieService } from "../../Service";
import {
  MOVIE_LIST_REQUEST,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
} from "./type";

export const getMovieListRequest = () => {
  return (dispatch) => {
    dispatch(createAction(MOVIE_LIST_REQUEST));
    movieService
      .getMovieList()
      .then((res) => {
        // console.log(res.data);
        dispatch(createAction(GET_MOVIE_LIST_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(createAction(GET_MOVIE_LIST_FAILED, err));
      });
  };
};

export const getMovieDetailRequest = (id) => {
  return (dispatch) => {
    movieService
      .getMovieDetail(id)
      .then((res) => {
        console.log(res.data);
        dispatch(createAction(GET_MOVIE_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        dispatch(createAction(GET_MOVIE_DETAIL_FAILED, err));
      });
  };
};
