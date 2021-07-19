import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Roboto';
  border-top: 1px solid gray;
  padding: ${({ theme }) => theme.padding.m}em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    align-self: center;
    color: ${({ theme }) => theme.colors.orange.normal};
  }

  .header {
    display: flex;
    position: relative;
    width: 100%;
  }

  .favourite {
    position: absolute;
    top: 0;
    right: 0;
    font-size: ${({ theme }) => theme.fontSize.m}em;
    cursor: pointer;
  }

  .favourite_not {
    position: absolute;
    top: 0;
    right: 0;
    font-size: ${({ theme }) => theme.fontSize.m}em;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.green.normal};
  }
`;
