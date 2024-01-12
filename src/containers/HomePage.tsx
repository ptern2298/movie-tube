import React from 'react';
import MoviesRowComponent from "../components/MoviesRowComponent";
import requests from "../utils/Requests";
function HomePage() {
    return(
        <div>
            <MoviesRowComponent title="Trending" fetchURL={requests.fetchTrending}/>
            <MoviesRowComponent title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <MoviesRowComponent title="Originals" fetchURL={requests.fetchNetflixOriginals}/>
            <MoviesRowComponent title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <MoviesRowComponent title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <MoviesRowComponent title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <MoviesRowComponent title="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLarge={false}/>
            <MoviesRowComponent title="Documentaries" fetchURL={requests.fetchDocumentaries} isLarge={false}/>
        </div>
    );
}

export default HomePage;