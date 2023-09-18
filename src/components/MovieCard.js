import React from 'react';

const MovieCard = ({movie}) => {

    const genreFinder = () => {
        let genreArray = [];
        for (let i = 0; i < movie.genre_ids.length; i++) {
          switch (movie.genre_ids[i]) {
            case 28:
              genreArray.push(`Action`);
              break;
            case 12:
              genreArray.push(`Aventure`);
              break;
            case 16:
              genreArray.push(`Animation`);
              break;
            case 35:
              genreArray.push(`Comédie`);
              break;
            case 80:
              genreArray.push(`Policier`);
              break;
            case 99:
              genreArray.push(`Documentaire`);
              break;
            case 18:
              genreArray.push(`Drame`);
              break;
            case 10751:
              genreArray.push(`Famille`);
              break;
            case 14:
              genreArray.push(`Fantasy`);
              break;
            case 36:
              genreArray.push(`Histoire`);
              break;
            case 27:
              genreArray.push(`Horreur`);
              break;
            case 10402:
              genreArray.push(`Musique`);
              break;
            case 9648:
              genreArray.push(`Mystère`);
              break;
            case 10749:
              genreArray.push(`Romance`);
              break;
            case 878:
              genreArray.push(`Science-fiction`);
              break;
            case 10770:
              genreArray.push(`Téléfilm`);
              break;
            case 53:
              genreArray.push(`Thriller`);
              break;
            case 10752:
              genreArray.push(`Guerre`);
              break;
            case 37:
              genreArray.push(`Western`);
              break;
            default:
              break;
          }
        }
        return genreArray.map((genre) => <li key={genre}>{genre}</li>);
      };

      const addStorage = () => {
        let storedData = window.localStorage.movies 
        ? window.localStorage.movies.split(",") 
        : [];

        if(!storedData.includes(movie.id.toString())){
          storedData.push(movie.id);
          window.localStorage.movies = storedData;
        };
      };

      const deleteStorage = () => {
        let storedData = window.localStorage.movies.split(",");
        let newData = storedData.filter((id) => Number(id) !== movie.id);
        window.localStorage.movies = newData;
      };

      const checkIsStored = (movieToCheck) => {

        let storedData = window.localStorage.movies 
        ? window.localStorage.movies.split(",") 
        : [];

        if(storedData.includes(movieToCheck.id.toString())){
          return true;
        };
      }

    return (
        <article className='movie-card'>
            <header>
                <img src={movie.backdrop_path ? "https://image.tmdb.org/t/p/original" + movie.backdrop_path : "./img/poster.jpg"} alt={"Affiche de " + movie.title} />
                <h3>{movie.title}</h3>
                {movie.release_date ? <p>Sorti le: {movie.release_date.split("-").reverse().join("/")}</p> : null }
                <p>Note moyenne: {Number(movie.vote_average).toPrecision(2)}/10 {[...Array(Math.round(Number(movie.vote_average)))].map((e, i) => <span key={i}>⭐</span>)}</p>
            </header>
            <section>
                <ul>
                    {
                        movie.genre_ids ? genreFinder() : movie.genres.map((genre) => {
                          return <li key={genre}>{genre.name}</li>
                        })
                    }
                </ul>
                <h4>Synopsis:</h4>
                <p>{movie.overview}</p>
            </section>
            <footer>
              {
                movie.genre_ids
                  ? (
                      checkIsStored(movie)
                      ? <span>❤️</span>
                      : <button
                            onClick={() => addStorage()}
                        >
                            Ajouter aux favoris
                        </button>
                  )
                  : (
                    <button
                        onClick={() => {
                          deleteStorage();
                          window.location.reload();
                        }}
                    >
                        Supprimer de la liste
                    </button>
                  )
              }
            </footer>
        </article>
    );
};

export default MovieCard;