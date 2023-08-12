import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
  display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};  
    }
  `}
`;

export const ContainerFundo = styled.div`
  ${({ theme }) => css`
  position: relative;
  display: flex;
  
  `}
`;

export const BtnContainer = styled.div`
  ${({ theme }) => css`
  text-align: center;
  /* background-color: aliceblue; */
  @media ${theme.media.lteMedium} {
    padding-top: 20px;
      
    }
  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
 
  @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
     width: 100%;
     align-items: center;
    
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    padding-top: 40px;
    width: 90%;
    border-radius: 100px;
    background-color: aliceblue;

    @media ${theme.media.lteMedium} {
      background-color: aliceblue;
      width: 50%;
      }
  `}
`;

export const Btn = styled.button`
 ${({ theme,colorDark }) => css`
  /* Estilos de fundo e cor do texto */
  background-color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
  color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white };
 
  /* Margem e padding */
  margin: 10px 0;
  padding: 30px 80px;

  /* Borda e raio do botão */
  border-radius: 50px;
  font-weight: bold;
  font-size: 20px;
  /* Efeito de transição suave */
  transition: background-color 0.3s ease;

  /* Estilo do texto em hover */
  &:hover {
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
 
    cursor: pointer;
  }
 `}
`;
