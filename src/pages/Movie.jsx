import { apiKey } from 'API key';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Movie = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const MOVIE_LINK = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <nav>
        <Link to="/">Go back</Link>
      </nav>
      {movieDetails && (
        <div>
          <img alt="" src={MOVIE_LINK + movieDetails.poster_path} />
        </div>
      )}
    </div>
  );
};

export default Movie;
