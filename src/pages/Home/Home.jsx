import { useEffect, useState } from 'react';
import { getMoviesTrending } from 'helpers/movieSearchApi';
import { toast } from 'react-toastify';

import { MovieList } from '../../components/MovieList';

import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getMoviesTrending();
        setMovies(movies);
      } catch (error) {
        toast(error.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MovieList movies={movies} />
    </main>
  );
};
export default Home;
