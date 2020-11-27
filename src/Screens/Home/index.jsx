import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import CarouselSlider from "../../components/Carousel";
import News from "../../components/News";
import ShowTime from "../../components/ShowTime";
import Footer from "../../components/Footer";
import MovieSchedule from "../../components/MovieSchedule";
import "./style.scss";
import {
  fetchMovieComing,
  fetchMovieList,
} from "../../Redux/Actions/movie.action";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <CarouselSlider />
        <ShowTime
          movieList={this.props.movieList}
          movieListUpComing={this.props.movieListUpComing}
        />
        <MovieSchedule />
        <News />
        <Footer />
      </>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchMovieList());
    this.props.dispatch(fetchMovieComing());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    movieListUpComing: state.movie.movieListUpComing,
  };
};

export default connect(mapStateToProps)(Home);
