import React from "react";

const MovieItem = ({ movie }) => {
  console.log(movie);
  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={movie.hinhAnh} alt={movie.tenPhim} />
        <div className="card-body">
          <h4 className="card-title">{movie.tenPhim}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
