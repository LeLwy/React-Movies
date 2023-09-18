import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Favorites = () => {

    const [favoritesList, setFavoritesList] = useState([]);

    useEffect(() => {

        let moviesId = window.localStorage.movies
            ? window.localStorage.movies.split(",")
            : [];

        for (let i=0; i<moviesId.length; i++) {

            axios
                .get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=56d1ac13f2d4be73ee7ccd462fc960fb&language=fr-FR`)
                .then((res) => setFavoritesList((data) => [...data, res.data]));
        };
    }, []);

    return (
        <div className='favorites-main-container'>
            <h1 className='sr-only'>React Movies - Favoris</h1>
            <Header />
            <section className="favorites-main-container">
                <h2>Coups de coeur <span>💖</span></h2>
                <div className="favorites-container">
                    {
                        favoritesList.length > 0
                        ? (
                            favoritesList.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                        )
                        : (
                            <h3> Aucun coup de coeur pour le moment</h3>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Favorites;