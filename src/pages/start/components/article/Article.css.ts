import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Roboto';
  img {
    width: 100%;
    height: auto;
  }

  .content_title {
    font-weight: 500;
    text-transform: capitalize;
    color: #0e1523;
  }

  .content_meta {
    color: #989898;
    margin-bottom: ${({ theme }) => theme.margin.m}em;

    span:nth-child(2) {
      margin-right: ${({ theme }) => theme.margin.m}em;
    }
  }

  .content_description {
    color: #777777;
    word-break: break-all;
    margin-bottom: ${({ theme }) => theme.margin.m}em;
  }

  .content_readmore {
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green.normal};
  }
`;
