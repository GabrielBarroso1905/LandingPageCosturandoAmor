import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      border-radius: 15px;
      height: 5rem;
    }
  `}
`;
