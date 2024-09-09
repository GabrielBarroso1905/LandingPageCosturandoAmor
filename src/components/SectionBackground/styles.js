import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background, color }) => css`
    background: ${color ? color : theme.colors.white};
    color: ${theme.colors.Color};
    ${background && !color && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
