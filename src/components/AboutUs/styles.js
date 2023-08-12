import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.medium}; /* Reduzimos o espaçamento entre os elementos */

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const About = styled.div`
  ${({ theme }) => css`
    /* margin-bottom: ${theme.spacings.xhuge}; */
  `}
`;

export const P = styled.p`
  ${({ theme }) => css`
    line-height: 1.5;
    font-size: 20px;
    color: ${theme.colors.text};
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 100%;
    
    /* Ajuste para manter a imagem grande e movê-la para cima em telas menores */
    @media (max-width: ${theme.media.lteMedium}) {
      align-self: flex-start;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 100%;


  

  `}
`;

export const List = styled.div`
  ${({ theme }) => css`
    display: flex; /* Utiliza o flexbox para colocar as listas lado a lado */
    flex-direction: row; /* Por padrão, coloca as listas em linha */
   
    /* Estilização das listas filhas */
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-right: ${theme.spacings.large}; /* Use medidas flexíveis */

      li {
        margin-bottom: ${theme.spacings.small}; /* Use medidas flexíveis */
        padding: 0;
        white-space: nowrap; /* Impede que o texto seja quebrado */
                /* Estilização do ícone */
          svg {
          /* color: ${theme.colors.primary}; */
          color: ${theme.colors.primaryColor}; /* Define a cor do ícone */
        
          margin-right: ${theme.spacings.small}; /* Adiciona espaçamento entre o ícone e o texto */
        }

      }
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
  

    }
  `}
`;
