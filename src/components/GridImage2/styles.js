import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.large};
    /* padding: ${theme.spacings.large}; */
    background-color: ${theme.colors.lightBackground};

    @media ${theme.media.lteMedium} {
      gap: ${theme.spacings.medium};
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const Gallery = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
  gap: 16px;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  text-align: center;
  opacity: 0;
  transform: scale(0.9);
  animation: fadeIn 0.3s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalImage = styled.img`
  max-width: 60%;
  max-height: 60%;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 95%;
  }
`;

export const ModalCaption = styled.div`
  color: white;
  margin-top: 10px;
`;