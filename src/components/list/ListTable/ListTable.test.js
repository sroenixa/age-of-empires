import React from 'react';
import { render, screen } from '@testing-library/react';
import ListTable from './ListTable';
import { BrowserRouter as Router } from 'react-router-dom';

beforeAll(() => {
    global.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
});

const mockData = [
  {
    id: 1,
    name: 'Item 1',
    age: 10,
    cost: {
        "Wood": 40,
        "Gold": 70
      },
  },
  {
    id: 2,
    name: 'Item 2',
    age: 20,
    cost: {
        "Wood": 40,
        "Food": 70
      },
  }
];

describe('ListTable', () => {

    test('Render Table and Put Headers Successfully', () => {
        render(
          <Router>
            <ListTable data={mockData} />
          </Router>
        );
        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Age')).toBeInTheDocument();
        expect(screen.getByText('Costs')).toBeInTheDocument();
      });
      
      test('Render Table and Put Correct Data Successfully', () => {
        render(
          <Router>
            <ListTable data={mockData} />
          </Router>
        );

        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('Wood: 40, Gold: 70')).toBeInTheDocument();
      
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
        expect(screen.getByText('Wood: 40, Food: 70')).toBeInTheDocument();
      });
      
      test('Render Table and Put Correct Links Successfully', () => {
        render(
          <Router>
            <ListTable data={mockData} />
          </Router>
        );
      
        expect(screen.getByText('1').closest('a')).toHaveAttribute('href', '/detail/1');
        expect(screen.getByText('2').closest('a')).toHaveAttribute('href', '/detail/2');
      }
      
      );
});

