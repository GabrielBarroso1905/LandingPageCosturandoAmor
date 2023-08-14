import styled, { css } from 'styled-components';
import { Heading } from '../Heading';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
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
  ${({ theme }) => css`
    position: relative;
    padding: 2px;

    .testimonial-image {
      float: left;
      margin-right: 15px;

      img {
        display: block;
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
        font-style: italic;
      }

      .testimonial-meta {
        margin-top: 15px;
        font-size: 22px;
        font-weight: 600;
        color: Black;
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
    @media ${theme.media.small} {
      .p{
        margin-bottom: 0;
        font-size: '1.5rem' 
        font-style: italic;    
      }
  `}
`;
