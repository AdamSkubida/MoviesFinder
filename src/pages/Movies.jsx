import { useState, useEffect } from 'react';
import { apiKey } from 'API key';
import css from './Movies.module.css';

const Movies = () => {
  const MOVIE_LINK = 'https://image.tmdb.org/t/p/w500';
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInput = e => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleButton = () => {
    const fetchSearchedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSearchedMovies();
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div>
      <input
        value={query}
        placeholder="Search movie"
        onChange={handleInput}
      ></input>
      <button onClick={handleButton}>Search</button>
      <div className={css.wrapper}>
        {movies ? (
          movies.map(movie => {
            return (
              <div key={movie.id}>
                <img
                  className={css.image}
                  alt=""
                  src={MOVIE_LINK + movie.poster_path}
                />
              </div>
            );
          })
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
};

export default Movies;
