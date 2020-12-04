import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MovieDetailMainContent from '../../components/MovieDetailMainContent'
import MovieDetailMainTop from '../../components/MovieDetailMainTop'

export default function MovieDetail() {
    return (
        <div>
            <Header></Header>
            <MovieDetailMainTop/>
            <MovieDetailMainContent/>
            <Footer></Footer>
        </div>
    )
}
