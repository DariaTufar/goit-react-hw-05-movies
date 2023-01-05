import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  z-index: 1100;
  display: flex;
  justify-content: left;
  align-items: right;
  padding: ${p => p.theme.sizes.l};
  border-color: ${p => p.theme.colors.bgAccent}; ;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  border: 2px solid ${p => p.theme.colors.bgAccent};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
  background-color: #fff;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.sizes.m};
  border: none;
  outline: none;
  padding: ${p => p.theme.sizes.xs};
  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.sizes.l};
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: ${p => p.theme.sizes.xl};
  height: ${p => p.theme.sizes.xl};
  border: 0;
  transition: opacity ${p => p.theme.styles.transition};
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Icon = styled(HiSearch)`
  width: ${p => p.theme.sizes.l};
  height: ${p => p.theme.sizes.l};
  fill: ${p => p.theme.colors.bgAccent}; ;
`;
