import styled, { css } from 'styled-components';

export const ContainerImageText = styled.div`
  ${({ theme }) => css`
    display: flex; /* Adiciona display: flex para alinhar os elementos filhos lado a lado */
    white-space: nowrap;
    @media screen and (max-width: 600px) {
      /* Quando a largura da tela for 768 pixels ou menor */
      flex-direction: column; /* Altera a direção do flex para column */
      align-items: flex-start; /* Opcional: alinha os itens à esquerda */
    }
  `}
`;


export const About = styled.div`
  ${({ theme }) => css`
  /* margin-bottom: ${theme.spacings.xhuge}; */
  padding: 100px 0;
    }
  `}
  
`;
export const Image = styled.img`
  ${({ theme }) => css`
    width: 80%;
    transition: all 300ms ease-in-out;
    
    &:hover {
      transform: scale(1.01);
    }
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
      margin-right: 200px; /* Adicione margem direita para separar as listas */

      li {
        margin-bottom: 6px;
        padding: 0;
        white-space: nowrap; /* Impede que o texto seja quebrado */
      }
    }

    @media (max-width: 408px) {
      /* Quando a tela for menor que 768px, muda o flex-direction para "column" */
      flex-direction: column;
      
      /* Adiciona margem inferior para separar as listas verticalmente */
      ul {
        margin-bottom: 20px;
      }
    }
  `}
`;