import styled from 'styled-components';

export const Wrapper = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.green.normal};
  padding: ${({ theme }) => theme.padding.m}em;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: ${({ theme }) => theme.margin.l}em;
  cursor: pointer;
`;
