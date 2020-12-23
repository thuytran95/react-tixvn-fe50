import { combineReducers } from "redux";
import MovieReducer from "./Movie.reducer";
import TheaterReducer from "./Theater.reducer";
import UserReducer from "./User.reducer";

const RootReducer = combineReducers({
  movie: MovieReducer,
  theater: TheaterReducer,
  user: UserReducer,
});

export default RootReducer;
