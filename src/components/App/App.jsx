import { Routes, Route } from 'react-router-dom';
import React  from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  Home from 'pages/Home';
import  Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';

import { SharedLayout } from 'components/SharedLayout';
import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';

import  Cast   from 'components/Cast';
import  Reviews  from 'components/Reviews' ;
import  MovieDetails  from 'pages/MovieDetails';


  const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </Box>
  );
};

 
export default App;