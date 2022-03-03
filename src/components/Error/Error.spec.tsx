import React from 'react';
import { render, screen } from '@testing-library/react';

import Error from './index';

describe('Component error', () => {
  it('Should render', () => {
    render(<Error />);
    expect(screen.getByText('Произошла ошибка во время загрузки данных')).toBeInTheDocument();
  });

  it("Should didn't change snapshot", () => {
    const app = render(<Error />);
    expect(app).toMatchSnapshot();
  });
});
