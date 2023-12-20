import React from 'react';
import MoviesRowComponent from "../components/MoviesRowComponent";

function HomePage() {
    return(
        <div>
            <MoviesRowComponent/>
            <MoviesRowComponent/>
            <MoviesRowComponent/>
        </div>
    );
}

export default HomePage;