import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders Homepage Correctly', async () => {
  render(
      <App />
  );
  await waitFor(() => {
    expect(screen.getByAltText('homepage_image')).toBeInTheDocument();
  });

});

