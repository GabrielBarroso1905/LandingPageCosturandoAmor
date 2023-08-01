import styled, { keyframes,css } from "styled-components";

// Define the animation for the spinner
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingSpinner = styled.div`
 ${({ theme,colorDark }) => css`
  width: 35px;
  height: 35px;
  /* border: 8px solid ${colorDark ? theme.colors.white : theme.colors.primaryColor}; 
  border-top: 8px solid ${colorDark ? theme.colors.primaryColor : theme.colors.white};  */
  
  border: 8px solid ${colorDark ? theme.colors.primaryColor : theme.colors.white};  /* Light grey */
  border-top: 8px solid ${colorDark ? theme.colors.white : theme.colors.primaryColor}; /* Black */
  border-radius: 50%;
  animation: ${spinAnimation} 1.5s linear infinite; /* Use the correct animation name here */
 `}
`;