import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    padding: 0 20px;
  `}
`;
