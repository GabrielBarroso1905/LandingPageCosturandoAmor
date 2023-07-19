import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width:90rem; /* Aumente a largura máxima aqui */  
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.spacings.xsmall};
    iframe {
      max-width: 100%;
      max-height: 90rem; /* Aumente a altura máxima aqui */
    }
  `}
`;
