import React, {useEffect, useState} from 'react';
import axios from '../utils/axios';
import '../style/MovieRow.css';

type Movie = {
    id: number,
    title: string,
    name: string,
    backdrop_path: string,
    poster_path: string
};

type Props = {
    title: string,
    fetchURL: string,
    isLarge?: boolean
}
function MoviesRowComponent({ title, fetchURL, isLarge = false } : Props) {
    const [movies,SetMovies] = useState<Movie[]>([]);
    const movieBaseURL = 'https://image.tmdb.org/t/p/original/';
    useEffect(() => {
        async function fetchMovieData() {
            const request = await axios.get(fetchURL);
            SetMovies(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchMovieData();
    }, [fetchURL])
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='movies-row'>
                {movies.map(movie =>(
                    ((isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && (
                        <img
                            className={`movie-poster ${isLarge && 'movie-large-poster'}`}
                            key={movie.id}
                            src={`${movieBaseURL}${ isLarge ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    )
}

export default MoviesRowComponent;