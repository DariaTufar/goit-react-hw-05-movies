import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
 

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.sizes.m};

  margin-bottom: ${p => p.theme.sizes.m};

  height: ${p => p.theme.sizes.xxl};

  > nav {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: ${p => p.theme.sizes.m};
  border-radius: ${p => p.theme.radii.md};
  text-decoration: none;
  color: ${p => p.theme.colors.dark};
  font-weight: ${p => p.theme.sizes.xl};
  margin: ${p => p.theme.sizes.m};
  background-color: ${p => p.theme.colors.bgLight};
  &.active {
    color: white;
    background-color: ${p => p.theme.colors.bgAccent};
  }
`;
