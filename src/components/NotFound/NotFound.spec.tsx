import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFound from './index';

describe('Component error', () => {
  it('Should render', () => {
    render(<NotFound />);
    expect(screen.getByText('Страница не найдена')).toBeInTheDocument();
  });

  it("Should didn't change snapshot", () => {
    const app = render(<NotFound />);
    expect(app).toMatchSnapshot();
  });
});
