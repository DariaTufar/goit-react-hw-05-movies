import styled from 'styled-components';
 

export const List = styled.ul`
  padding-left: 100px;
  padding-top: 20px;
`;

export const Item = styled.li`
  padding-bottom: ${p => p.theme.sizes.m};
  :hover {
    color: ${p => p.theme.colors.bgAccent};
    font-weight: bold;
  }
`;
