import { useEffect } from 'react';

export const App = () => {
  const apiKey = 'c6cec78029d9b3a5ee3a2d24ebcb1c0f';
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.results);
        return data.results;
      } catch (error) {
        console.error('Wystąpił błąd:', error);
        return [];
      }
    };
    fetchMovies();
  }, [apiUrl]);

  return <div>LOL</div>;
};
