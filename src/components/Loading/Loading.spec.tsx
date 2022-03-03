import React from 'react';
import { render, screen } from '@testing-library/react';

import Loading from './index';

describe('Component loading', () => {
  it('Should render', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  it("Should didn't change snapshot", () => {
    const app = render(<Loading />);
    expect(app).toMatchSnapshot();
  });
});
