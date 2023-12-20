import React from 'react';
import axios from '../utils/axios'

function MoviesRowComponent() {
    return(
        <div>
            <h2>Movie Title</h2>
            <div>
                <img key='movieKey' src='' alt='movie name'/>
            </div>
        </div>
    )
}

export default MoviesRowComponent;