import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieCast } from 'helpers/movieSearchApi';
import defaultNoImage from 'images/no_image_filmstrip.png';

import { CastList, CastItem, CastImage, CastText } from './Cast.styled';

const Cast = () => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const movieCast = await getMovieCast(movieId);

        setMovieCast(movieCast);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <CastList>
      {movieCast.map(cast => (
        <CastItem key={cast.id}>
          <CastImage
            src={
              cast.profile_path ? BASE_URL + cast.profile_path : defaultNoImage
            }
            alt={cast.name}
          />
          <CastText>{cast.name}</CastText>
          <CastText>Character: {cast.character} </CastText>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
