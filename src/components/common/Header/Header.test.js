import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import { headerLinks } from '../../../config/routeConfig';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Header', () => {
  test('Render Header and Logo', () => {
    render(    
        <Router>
            <Header />
        </Router>
    );
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', expect.stringContaining('logo.png'));
  });

  test('Render Header And Nav Links', () => {
    render(    
        <Router>
            <Header />
        </Router>
    );
    headerLinks.forEach((link) => {
      expect(screen.getByText(link.title)).toBeInTheDocument();
      expect(screen.getByText(link.title).closest('a')).toHaveAttribute('href', link.path);
    });
  });
});
