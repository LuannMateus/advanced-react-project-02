import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridTwoColumns } from '.';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('Should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
