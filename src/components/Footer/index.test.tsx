import { renderTheme } from '../../styles/renderTheme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('Should render a footer', () => {
    const { container } = renderTheme(<Footer footerHtml="<h1>Hello!</h1>" />);

    expect(container).toMatchSnapshot();
  });
});
