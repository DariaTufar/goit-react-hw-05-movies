import styled from 'styled-components';

export const CastList = styled.ul`
  padding: ${p => p.theme.sizes.m};
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${p => p.theme.sizes.m}; 
  font-size: ${p => p.theme.sizes.m};
`;

export const CastItem = styled.li`
  padding: ${p => p.theme.sizes.m};
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.primary};
`;

export const CastImage = styled.img`
  min-height: ${p => p.theme.sizes.xxl};
  width: ${p => p.theme.sizes.xxl};
  border-radius: ${p => p.theme.radii.md};
  padding: ${p => p.theme.sizes.xxs};
  object-fit: contain;
`;

export const CastText = styled.p`
  font-size: ${p => p.theme.sizes.m};
  margin: 10px 0;
`;
