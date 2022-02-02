import { renderTheme } from '../../styles/renderTheme';
import { GridImage } from '.';

import mock from './mock';

describe('<GridImage />', () => {
  it('Should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);

    expect(container).toMatchSnapshot();
  });

  it('Should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
