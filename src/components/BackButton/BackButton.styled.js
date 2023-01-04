import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.sizes.xxs};
  padding: 8px 0;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: ${p => p.theme.sizes.xxl};
  :hover {
    color: ${p => p.theme.colors.textAccent};
    font-weight: bold;
  }
`;
