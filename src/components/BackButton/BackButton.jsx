import { HiArrowLeft } from 'react-icons/hi';

import { StyledLink } from './BackButton.styled';

export const BackButton = ({ back, children }) => {
  return (
    <StyledLink to={back}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
