import styled, { css } from 'styled-components';
import { Heading } from '../Heading';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    text-align: center;
  `}
`;

export const ServiceCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 0px auto;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      display: inline;/* Adiciona a propriedade flex-wrap para que os itens sejam distribuídos em uma única coluna quando a tela for pequena */
    }
  `}
`;
export const video = styled.video`
  ${({ theme, colorDark }) => css`
    height: auto;
    max-width: 100%;
    border-radius: 10px;
  `}
  position: relative; /* Adiciona posicionamento relativo para poder posicionar a imagem de capa */
`;
export const source = styled.source`
${({ theme }) => css`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  z-index: -1; */
`}
`;

export const VideoBackground = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    z-index: -1;
  `}
`;
export const ServiceCard = styled.div`
  ${({ theme,colorDark }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px 5px;

    background-color: #FFFFFF;
    
    border-radius: 10px;
    border: none;
    margin: 12px 8px;
    transition: 0.1s all ease-in;
  `} > * {
    margin: 0px auto;
  }

`;
export const ServiceCardIcon = styled.div`
  ${({ theme,colorDark}) => css`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 12px auto;
    margin-bottom: 24px;
    border-radius: 50%;
    background-color: ${colorDark ?  theme.colors.white : theme.colors.primaryColor };
    transition: 0.1s all ease-in;
  `}
`;
export const IcoInsta = styled.div`
  ${({ theme,colorDark}) => css`
    color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white};
    margin: auto;
    font-size: 7rem;
  `}
`;
export const Text = styled.div`
  ${({ theme,colorDark}) => css`
    line-height: 22px;
    color: ${colorDark ?  theme.colors.white : theme.colors.primaryColor };
  `}
`;
