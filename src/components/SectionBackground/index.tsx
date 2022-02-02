import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { ReactNode } from 'react';

export type SectionBackgroundProps = {
  children: ReactNode;
  background?: boolean;
  sectionId?: string;
};

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
