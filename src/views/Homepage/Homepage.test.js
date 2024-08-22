import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage'; 

describe('Homepage', () => {
    test('Render Successfully', () => {
        render(<Homepage />);
      
        expect(screen.getByAltText('homepage_image')).toBeInTheDocument();
      
        const imgElement = screen.getByAltText('homepage_image');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', expect.stringContaining('homepage.jpg'));
      });
      
});
