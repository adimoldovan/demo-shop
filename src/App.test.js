import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app shell', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Demo Shop/i)).toBeInTheDocument();
});
