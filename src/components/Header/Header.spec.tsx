import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './index';

describe('Component loading', () => {
  it('Should render', () => {
    render(<Header />);
    expect(screen.getByText('Site to make you')).toBeInTheDocument();
  });
  it("Should didn't change snapshot", () => {
    const app = render(<Header />);
    expect(app).toMatchSnapshot();
  });
});
