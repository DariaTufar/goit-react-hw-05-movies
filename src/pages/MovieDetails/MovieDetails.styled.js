import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.sizes.l};
  padding-left: ${p => p.theme.sizes.xxl};
`;

export const Image = styled.img`
  width: 700px;
  border-radius: ${p => p.theme.radii.md};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.sizes.l};
  margin-bottom: ${p => p.theme.sizes.m};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.sizes.m};
  margin-bottom: ${p => p.theme.sizes.m};
`;
export const TitleOverview = styled.h3`
  font-size: ${p => p.theme.sizes.m};
  margin-bottom: ${p => p.theme.sizes.m};
`;

export const Information = styled.div`
  padding: 40px 0 40px 100px;
  border-bottom: solid ${p => p.theme.colors.bgAccent};
;
`;

export const Item = styled.li`
  padding-bottom: 10px;
  font-size: 20px;
  :hover {
    text-decoration: underline;
    color: teal;
    font-weight: bold;
  }
`;
