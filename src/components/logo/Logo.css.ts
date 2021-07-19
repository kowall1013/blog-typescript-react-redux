import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100px;
  img {
    display: block;
    width: 100%;
    height: auto;
    margin: ${({ theme }) => theme.margin.l}em;
  }
`;
