import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BackButton } from 'components/BackButton';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';

import { getMovieDetails } from 'helpers/movieSearchApi';
import defaultPoster from '../../images/no_image_filmstrip.png';
import { Loader } from 'components/Loader/Loader';
import {
  Wrapper,
  Image,
  Title,
  Text,
  TitleOverview,
  Information,
  Item,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w300';

  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await getMovieDetails(movieId);

        setMovieDetails(movieDetails);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      <BackButton to={goBack}>Go back</BackButton>
      <Wrapper>
        <div>
          <Image
            src={
              movieDetails.poster_path
                ? BASE_URL + movieDetails.poster_path
                : defaultPoster
            }
            alt={movieDetails.title}
          />
        </div>
        <div>
          <Title>
            {movieDetails.title} (
            {movieDetails.release_date
              ? movieDetails.release_date.slice(0, 4)
              : ' Sorry, year unknown'}
            )
          </Title>
          <Text>
            User Score:{' '}
            {movieDetails.vote_average
              ? Math.floor(movieDetails.vote_average * 10).toFixed(0)
              : ''}
            %
          </Text>
          <TitleOverview> Overview</TitleOverview>
          <Text>{movieDetails.overview}</Text>
          <TitleOverview>Genres</TitleOverview>
          <Text>
            {movieDetails.genres
              ? movieDetails.genres.map(genre => genre.name).join(' ')
              : 'Sorry, genre is not specified'}
          </Text>
        </div>
      </Wrapper>
      <Information>
        <Title>Additional information</Title>
        <ul>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviews">Reviews</Link>
          </Item>
        </ul>
      </Information>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
