import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => theme.padding.m * 3}em;
  background-color: #ffffff;
  margin-top: ${({ theme }) => theme.margin.m}em;
`;
