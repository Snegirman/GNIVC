import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ViewNavigation from './index';

describe('Component app', () => {
  it('Should render', () => {
    render(<MemoryRouter><ViewNavigation /></MemoryRouter>);
    expect(screen.getByText('Table')).toBeInTheDocument();
    expect(screen.getByText('List')).toBeInTheDocument();
  });

  it("Should didn't change snapshot", () => {
    const app = render(<MemoryRouter><ViewNavigation /></MemoryRouter>);
    expect(app).toMatchSnapshot();
  });
});
