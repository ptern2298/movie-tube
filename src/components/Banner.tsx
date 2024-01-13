import React, { useEffect, useState } from 'react';
import '../style/Banner.css';
import axios from '../utils/axios';
import requests from '../utils/Requests';

type Movie = {
    id: number,
    title: string,
    name: string,
    original_name: string,
    backdrop_path: string,
    poster_path: string,
    overview: string
};
function Banner() {
    const [movie,SetMovie] = useState<Movie | null>(null);

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            SetMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]);
            return request
        }
        fetchData()
    }, [])

    function trunclate(str: string | undefined, n: number): string | undefined {
        return str?.length ? str.substr(0, n - 1) + '...' : str;
    }

    return(
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
            backgroundPosition: 'center center',
        }}>
            <div className='banner-content'>
                <h1 className='banner-movie-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner-btns'>
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>My List</button>
                </div>
                <h2 className='banner-description'>{trunclate(movie?.overview,100)}</h2>
            </div>
            <div className='banner__fadeBottom'/>
        </header>
    )
}

export default Banner;

