import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100%;

    text-align: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
