import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PostList from './index';

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

describe('Component post list', () => {
  it('Should render', () => {
    render(<MemoryRouter><PostList postData={[post]} searchValue="" isError={false} isLoading={false} /></MemoryRouter>);
    const div = document.getElementsByTagName('div').length;
    expect(div).toBe(4);
  });

  it('Should show loading', () => {
    render(<MemoryRouter><PostList postData={[post]} searchValue="" isError={false} isLoading /></MemoryRouter>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Should show error', () => {
    render(<MemoryRouter><PostList postData={[post]} searchValue="" isError isLoading={false} /></MemoryRouter>);
    expect(screen.getByText('Произошла ошибка во время загрузки данных')).toBeInTheDocument();
  });
  it("Should didn't change snapshot", () => {
    const app = render(<MemoryRouter><PostList postData={[post]} searchValue="" isError={false} isLoading={false} /></MemoryRouter>);
    expect(app).toMatchSnapshot();
  });
});
