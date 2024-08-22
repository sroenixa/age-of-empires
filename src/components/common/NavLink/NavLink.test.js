import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router,useLocation } from 'react-router-dom'; 
import NavLink from './NavLink'; 


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
  }));

describe('NavLink', () => {

  test('Render Link with Correct Path,Title and Control Active Class', () => {
    useLocation.mockReturnValue({ pathname: '/test' });
    render(
        <Router>
          <NavLink path="/test" title="Test NavLink" />
        </Router>
      );

    const link = screen.getByText('Test NavLink');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('active');
  });

});
