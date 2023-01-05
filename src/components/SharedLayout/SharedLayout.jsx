import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import backgroundImage from  '../../images/blue_background_curtains.jpg';
 

import {
  Container,
  Header,
  StyledNavLink
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
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
       
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
