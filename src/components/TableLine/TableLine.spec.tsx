import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TableLine from './index';

const post = {
  category: 'category',
  flags: {
    explicit: false,
    nsfw: false,
    political: false,
    racist: false,
    religious: false,
    sexist: false,
  },
  id: 1,
  joke: 'some joke',
  lang: 'en',
  safe: true,
  type: 'any',
};

describe('Component table line', () => {
  it('Should render', () => {
    render(<MemoryRouter><tbody><TableLine data={post} /></tbody></MemoryRouter>);
    expect(screen.getByText('category')).toBeInTheDocument();
  });

  it("Should didn't change snapshot", () => {
    const app = render(<MemoryRouter><tbody><TableLine data={post} /></tbody></MemoryRouter>);
    expect(app).toMatchSnapshot();
  });
});
