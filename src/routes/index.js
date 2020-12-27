import MovieScheduleMobile from "../components/MovieScheduleMobile";
import Home from "../Screens/Home";
import MovieDetail from "../Screens/MovieDetail";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/home",
    component: Home,
  },
  {
    exact: false,
    path: "/movie-detail/:id",
    component: MovieDetail,
  },
  {
    exact: false,
    path: "/movie-schedule-mobile",
    component: MovieScheduleMobile,
  },
];

export { routesHome };
