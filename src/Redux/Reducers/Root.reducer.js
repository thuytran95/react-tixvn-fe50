import { combineReducers } from "redux";
import MovieReducer from "./Movie.reducer";

const RootReducer = combineReducers({
  movie: MovieReducer,
});

export default RootReducer;
