import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import { TextComponent } from '.';

describe('<TextComponent/>', () => {
  it('Should render a paragraph with Children', () => {
    renderTheme(<TextComponent>Children</TextComponent>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
