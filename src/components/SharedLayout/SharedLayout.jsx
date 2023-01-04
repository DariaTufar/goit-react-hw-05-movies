import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import backgroundImage from  '../../images/blue_background_curtains.jpg';
import { theme } from '../../constants';

import {
    Container,
    Header,
    Link
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        }}
      >
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
