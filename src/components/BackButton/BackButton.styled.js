import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.sizes.xxs};
  padding: ${p => p.theme.sizes.s};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: ${p => p.theme.sizes.xxl};
  margin-bottom: ${p => p.theme.sizes.l};
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.primary};

  :hover {
    color: ${p => p.theme.colors.textAccent};
    font-weight: bold;
 
  }
`;
