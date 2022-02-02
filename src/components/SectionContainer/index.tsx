import { ReactNode } from 'react';
import * as Styled from './styles';

export type SectionContainerProps = {
  children: ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
