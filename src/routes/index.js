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
 
];

export { routesHome };
