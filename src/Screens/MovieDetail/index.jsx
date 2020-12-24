import React, { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailMainContent from "../../components/MovieDetailMainContent";
import MovieDetailMainTop from "../../components/MovieDetailMainTop";
import { getMovieDetailRequest } from "../../Redux/Actions/movie.action";

export default function MovieDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  // console.log('moveis',movieDetail);
  useEffect(() => {
    dispatch(getMovieDetailRequest(id));
   
  }, []);

  return (
    <div>
      <MovieDetailMainTop movieDetail={movieDetail}/>
      <MovieDetailMainContent movieDetail={movieDetail} />
    </div>
  );
}
