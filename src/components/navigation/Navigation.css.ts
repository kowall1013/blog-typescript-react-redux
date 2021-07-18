import styled from 'styled-components';

export const Wrapper = styled.nav`
  font-family: 'Otomanopee One', sans-serif;
  .toggle {
    display: flex;
    border: none;
    background-color: transparent;
    margin: ${({ theme }) => theme.margin.l}em;
    font-size: ${({ theme }) => theme.fontSize.m}em;
    cursor: pointer;

    span:nth-child(1) {
      margin-right: ${({ theme }) => theme.margin.xxs}em;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;

    a {
      text-transform: uppercase;
      text-decoration: none;
      color: #000000;
      font-size: ${({ theme }) => theme.fontSize.s}em;
      width: 100%;
      line-height: 60px;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.green.normal};
      }
    }
  }

  .menu-list {
    flex-direction: row;

    a {
      padding: ${({ theme }) => theme.padding.s}em;
    }
  }
`;
