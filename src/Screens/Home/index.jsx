import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieListRequest } from "../../Redux/Actions/movie.action";
import CarouselSlider from "../../components/Carousel";
import News from "../../components/News";
import ShowTime from "../../components/ShowTime";
import MovieSchedule from "../../components/MovieSchedule";
import AppStore from "../../components/AppStore";
import "./style.scss";

class Home extends Component {
  render() {
    return (
      <>
        <CarouselSlider movieList={this.props.movieList} />
        <ShowTime movieList={this.props.movieList} />
        <MovieSchedule />
        <News />
        <AppStore />
      </>
    );
  }

  componentDidMount() {
    this.props.dispatch(getMovieListRequest());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps)(Home);
