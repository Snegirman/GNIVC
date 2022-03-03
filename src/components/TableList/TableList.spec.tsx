import React from 'react';
import { render, screen } from '@testing-library/react';

import TableList from './index';

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
    render(
      <TableList
        postData={[post]}
        setSortedData={() => { }}
        isError={false}
        isLoading={false}
      ><tr><td>Some text</td></tr>
      </TableList>,
    );
    expect(screen.getByText('Some text')).toBeInTheDocument();
  });

  it("Should didn't change snapshot", () => {
    const app = render(
      <TableList
        postData={[post]}
        setSortedData={() => { }}
        isError={false}
        isLoading={false}
      ><tr><td>Some text</td></tr>
      </TableList>,
    );
    expect(app).toMatchSnapshot();
  });
});
