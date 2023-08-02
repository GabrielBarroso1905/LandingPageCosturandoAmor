import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  margin-bottom: ${theme.spacings.xhuge};
    }
  `}
  
`;
export const Form = styled.form`
  ${({ theme }) => css`
  padding-top: 20px;
    }
  `}
  
`;

export const BtnSpinner = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* Adiciona posição relativa para que os elementos internos se posicionem relativamente a essa div */
    
    /* Exemplo de estilização para os elementos internos (pode variar de acordo com a sua necessidade) */
    & > * {
      position: absolute; /* Torna os elementos internos posicionados de forma absoluta */
      top: 50%; /* Posiciona o elemento na metade da altura da div pai */
      left: 50%; /* Posiciona o elemento na metade da largura da div pai */
      transform: translate(-50%, -50%); /* Centraliza o elemento no centro da div pai */
      z-index: 1; /* Defina o valor de z-index para controlar a ordem de sobreposição */
    }
  `}
`;
export const FormControl = styled.input`
  ${({ theme }) => css`
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.42857143;
  color: #444;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ddd;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
    }
  `}
  
`;
export const FormControlText = styled.textarea`
  ${({ theme }) => css`
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.42857143;
  color: #444;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ddd;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
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
  padding: 18px 28px;

  /* Borda e raio do botão */
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: medium;
  /* Efeito de transição suave */
  transition: background-color 0.3s ease;

  /* Estilo do texto em hover */
  &:hover {
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
 
    cursor: pointer;
  }
  /* Alinhamento à direita */
 `}
`;

export const Social = styled.div`
 ${({ theme }) => css`
   border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 50px;
  margin-top: 50px;
  text-align: center;
  `}
`;

export const A = styled.a`
 ${({ theme,colorDark }) => css`
 color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white };
 &:hover {
    color: ${theme.colors.secondaryColor};
    cursor: pointer;
  }
  `}
`;
export const ContactItem = styled.div`
  /* padding-top: 50px; */
  /* margin-top: 50px; */
  text-align: center;
`;
export const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 30px; /* Aumente o valor para aumentar a distância */
`;
export const TextEnd = styled.div`
  text-align: end;
`;


export const ContactInfo = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;


