import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridText } from '.';

import mock from './mock';

describe('<GridText />', () => {
  it('Should render with background', () => {
    const { container } = renderTheme(<GridText {...mock} />);

    expect(container).toMatchSnapshot();
  });

  it('Should render without background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
