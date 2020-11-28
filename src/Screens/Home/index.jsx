import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import CarouselSlider from "../../components/Carousel";
import News from "../../components/News";
import ShowTime from "../../components/ShowTime";
import Footer from "../../components/Footer";
import MovieSchedule from "../../components/MovieSchedule";
import "./style.scss";
import { fetchMovieList } from "../../Redux/Actions/movie.action";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Header />
        <CarouselSlider movieList={this.props.movieList} />
        <ShowTime movieList={this.props.movieList} />
        <MovieSchedule />
        <News />
        <Footer />
      </>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchMovieList());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps)(Home);
