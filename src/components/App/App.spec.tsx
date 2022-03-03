import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './index';

describe('Component app', () => {
  it("Should didn't change snapshot", () => {
    const app = render(<MemoryRouter><App /></MemoryRouter>);
    expect(app).toMatchSnapshot();
  });
});
