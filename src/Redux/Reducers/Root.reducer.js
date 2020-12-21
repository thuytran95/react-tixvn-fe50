import { combineReducers } from "redux";
import MovieReducer from "./Movie.reducer";
import TheaterReducer from "./Theater";

const RootReducer = combineReducers({
  movie: MovieReducer,
  theater: TheaterReducer,
});

export default RootReducer;
