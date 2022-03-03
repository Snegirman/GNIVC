import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Post from './Post';

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

describe('Component post', () => {
  it('Should render', () => {
    render(<MemoryRouter><Post {...post} /></MemoryRouter>);
    expect(screen.getByText('category')).toBeInTheDocument();
  });

  it("Should didn't change snapshot", () => {
    const app = render(<MemoryRouter><Post {...post} /></MemoryRouter>);
    expect(app).toMatchSnapshot();
  });
});
