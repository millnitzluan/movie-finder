import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

test('renders application logo', () => {
  const { getByAltText } = render(<Header />);
  const logo = getByAltText(/Application logo/i);

  expect(logo).toBeDefined()
});
