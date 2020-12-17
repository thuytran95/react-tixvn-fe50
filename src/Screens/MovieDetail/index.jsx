import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailMainContent from "../../components/MovieDetailMainContent";
import MovieDetailMainTop from "../../components/MovieDetailMainTop";
import { getMovieDetailRequest } from "../../Redux/Actions/movie.action";

export default function MovieDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetailRequest(id));
  }, []);

  return (
    <>
      <MovieDetailMainTop />
      <MovieDetailMainContent />
    </>
  );
}
