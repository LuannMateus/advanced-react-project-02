import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      width: 100%;
      height: 3rem;
    }
  `}
`;
