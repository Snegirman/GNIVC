import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './index';

const onChange = jest.fn();

describe('Component search', () => {
  it('Should render', () => {
    render(<Search value="asdf" handleSearch={onChange} />);
    expect(document.getElementsByTagName('input')[0].value).toBe('asdf');
  });

  it('Should call callback', () => {
    render(<Search value="" handleSearch={onChange} />);

    userEvent.type(document.getElementsByTagName('input')[0], 'abc');
    expect(onChange).toHaveBeenCalledTimes(3);
  });

  it("Should didn't change snapshot", () => {
    const app = render(<Search value="asdf" handleSearch={onChange} />);
    expect(app).toMatchSnapshot();
  });
});
