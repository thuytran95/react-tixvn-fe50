let initialState = {
  movieList: [],
  movieListUpComing: [],
  movieDetail: null,
};

const MovieReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    default:
      return state;
  }
};

export default MovieReducer;
