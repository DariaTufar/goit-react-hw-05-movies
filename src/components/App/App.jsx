import { Routes, Route } from 'react-router-dom';
import  { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from 'components/SharedLayout';
import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';

const  Home = lazy (() => import ('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const NotFound = lazy ( () => import ('../../pages/NotFound'));

const Cast = lazy(() => import('../../components/Cast')); 
const Reviews = lazy(() => import('../../components/Reviews'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));

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
