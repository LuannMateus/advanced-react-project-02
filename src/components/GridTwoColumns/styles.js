import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    margin-top: ${theme.spacings.xhuge};

    ${Title} {
      padding-left: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.xlarge};
    }

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;

      ${Title} {
        padding-left: 0;
      }
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `};
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css``};
`;
