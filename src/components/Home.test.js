import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders header logo', () => {
  const { getByAltText } = render(<Home />);
  const header = getByAltText(/Application logo/i);
  expect(header).toBeInTheDocument();
});
