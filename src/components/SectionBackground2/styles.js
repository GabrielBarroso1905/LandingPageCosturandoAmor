import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  color: ${theme.colors.white};
  
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
export const Fundo = styled.img`
  ${({ theme }) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%; /* Defina o tamanho desejado para o fundo */
  height: 100%; /* Defina o tamanho desejado para o fundo */
  z-index: -1; /* Coloca o fundo atrás do restante do conteúdo */
   background: ${theme.colors.white};
   @media ${theme.media.lteMedium} {
    width: 100%; /* Defina o tamanho desejado para o fundo */
    height: 100%; /* Defina o tamanho desejado para o fundo */
      }
  `}
`;

