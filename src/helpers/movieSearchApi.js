import axios from 'axios';


const API_KEY = 'e994a62a86f0219af0993364e0b8b3fc';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export async function getMoviesTrending() {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    if (response.data.results.length === 0) {
      throw Error('Sorry, but nothing was found for your request!');
    }
    return response.data.results;
  } catch (error) {
    if (error.request || error.response) {
      throw Error('Sorry, something went wrong, please try again!');
    } else {
      throw error;
    }
  }
}
export async function getMoviesSearch(query) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
    );
    if (!response.data.results.length) {
      throw Error('Sorry, no movies were found for your request!');
    }
    return response.data.results;
  } catch (error) {
    if (error.request || error.response) {
      throw Error('Sorry, something went wrong, please try again!');
    } else {
      throw error;
    }
  }
}


export async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    if (response.data.length === 0) {
      throw Error('Sorry, no movies were found for your request!');
    }
    return response.data;
  } catch (error) {
    if (error.request || error.response) {
      throw Error('Sorry, something went wrong, please try again!');
    } else {
      throw error;
    }
  }
}

export async function getMovieCast(movieId) {
  // getMovieCrediots
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (!response.data.cast.length) {
      throw Error('Sorry, no casts were found for your request!');
    }
    return response.data.cast;
  } catch (error) {
    if (error.request || error.response) {
      throw Error('Sorry, something went wrong, please try again!');
    } else {
      throw error;
    }
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    if (!response.data.results.length) {
      throw Error('Sorry, no reviews were found for your request!');
    }
    return response.data.results;
  } catch (error) {
    if (error.request || error.response) {
      throw Error('Sorry, something went wrong, please try again!');
    } else {
      throw error;
    }
  }
}