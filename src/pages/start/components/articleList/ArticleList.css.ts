import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: ${({ theme }) => theme.padding.m * 3}em;
  align-items: center;
`;
