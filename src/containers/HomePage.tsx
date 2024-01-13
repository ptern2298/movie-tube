import React from 'react';
import MoviesRowComponent from "../components/MoviesRowComponent";
import requests from "../utils/Requests";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import '../App.css';
function HomePage() {
    return(
        <div>
            <PageHeader/>
            <Banner/>
            <MoviesRowComponent title="Trending" fetchURL={requests.fetchTrending}/>
            <MoviesRowComponent title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <MoviesRowComponent title="Originals" fetchURL={requests.fetchNetflixOriginals}/>
            <MoviesRowComponent title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <MoviesRowComponent title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <MoviesRowComponent title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <MoviesRowComponent title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <MoviesRowComponent title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
        </div>
    );
}

export default HomePage;