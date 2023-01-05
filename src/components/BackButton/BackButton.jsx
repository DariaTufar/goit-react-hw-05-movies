import { TiArrowLeftOutline } from 'react-icons/ti';

import { StyledLink } from './BackButton.styled';

export const BackButton = ({ back, children }) => {
  return (
    <StyledLink to={back}>
      <TiArrowLeftOutline size="36" color="blue" />
      {children}
    </StyledLink>
  );
};
