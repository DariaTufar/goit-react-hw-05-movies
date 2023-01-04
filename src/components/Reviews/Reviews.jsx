import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieReviews } from 'helpers/movieSearchApi';
import { ContentReview, AuthorReview } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movieReviews = await getMovieReviews(movieId);

        setMovieReviews(movieReviews);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  return (
    <div>
      {movieReviews.length === 0 && (
        <p>Sorry, we don't have any reviews for this movie yet</p>
      )}
      <ul>
        {movieReviews.map(review => (
          <li key={review.id}>
            <AuthorReview>Author: {review.author}</AuthorReview>
            <ContentReview> {review.content} </ContentReview>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
