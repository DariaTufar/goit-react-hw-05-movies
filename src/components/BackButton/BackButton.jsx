import { TiArrowLeftOutline } from 'react-icons/ti';

import { StyledLink } from './BackButton.styled';

export const BackButton = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <TiArrowLeftOutline size="36" color="blue" />
      {children}
    </StyledLink>
  );
};
