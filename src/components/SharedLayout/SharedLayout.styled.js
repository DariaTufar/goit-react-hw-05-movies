import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
 
// import { theme } from '../../constants';

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
  padding: 8px 0;
  margin-bottom: 16px;
   
  height: ${p => p.theme.sizes.xxl};

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.sizes.m};
  
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin:  ${p => p.theme.sizes.m};
   background-color: ${p => p.theme.colors.bgLight};
  &.active {
    color: white;
    background-color: ${p => p.theme.colors.bgAccent};
  }
`;
