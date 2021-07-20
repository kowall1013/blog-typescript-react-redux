import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => theme.padding.m * 3}em;
  background-color: #ffffff;
  margin-top: ${({ theme }) => theme.margin.m}em;
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

  .content_comments {
    text-align: center;
    margin-top: ${({ theme }) => theme.margin.l * 3}em;
    margin-bottom: ${({ theme }) => theme.margin.l * 3}em;
  }

  .content_previous {
    background-color: transparent;
    border: none;
    background-color: ${({ theme }) => theme.colors.green.normal};
    padding: ${({ theme }) => theme.padding.xs * 2}em ${({ theme }) => theme.padding.m * 2}em;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
  }

  .content_favourite {
    font-size: ${({ theme }) => theme.fontSize.m}em;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray.normal};
  }
`;
