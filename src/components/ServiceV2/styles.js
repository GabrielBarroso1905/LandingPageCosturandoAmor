import styled, { css } from 'styled-components';
import { Heading } from '../Heading';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    text-align: center;
  `}
`;

export const TestimonialContainer = styled.div`
  ${({ theme }) => css`
    counter-reset: testimonial-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 2fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Testimonial = styled.div`
  ${({ theme,colorDark }) => css`
  display: grid;
  align-items: center;
  position: relative;
    padding: 2px;

    .testimonial-image {
      float: left;
      margin-right: 15px;
      

      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }

    .testimonial-content {
      /* Novas regras de estilo */

      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p {
        margin-bottom: 0;
        font-size: 20px;
      }

      .testimonial-meta {
        margin-top: 15px;
        font-size: 22px;
        font-weight: 600;
     
      }
    }

    ${Heading} {
      position: relative;
      left: 5rem;
    }

    ${Heading}::before {
      counter-increment: testimonial-counter;
      content: counter(testimonial-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }

    /* Reorganiza a estrutura para tela pequena */
    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .testimonial-image {
        margin-bottom: 15px;
      }

      ${Heading} {
        left: 0;
        margin-bottom: ${theme.spacings.small};
      }
    }
  `}
`;

export const IcoInsta = styled.div`
  ${({ theme,colorDark}) => css`
    color: ${theme.colors.white} ;
    /* color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white} ; */
    margin: auto;
    font-size: 2rem;
  `}
`;


export const ServiceCardIcon = styled.div`
  ${({ theme}) => css`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 12px auto;
    margin-bottom: 24px;
    border-radius: 50%;
    background: linear-gradient(to right, ${theme.colors.primaryColor}, #0f78e9 100%) ;
    border-radius: 50%;

    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
    transition: 0.1s all ease-in;
  `}
`;

