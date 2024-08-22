import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage'; 


const mockDispatch = jest.fn();
const mockUseSelector = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: (selector) => mockUseSelector(selector),
}));


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
      description: 'Description 1',
      age: 30,
      cost: {
          Wood: 100,
          Food: 50,
          Gold: 25,
      },
      build_time: '10m',
      reload_time: '5m',
      hit_points: 120,
      attack: 20,
      accuracy: 80
  }
];

describe('DetailPage', () => {
  test('Detail Page Fields Control Successfully', () => {
    mockUseSelector.mockImplementation((selector) => selector({ selectedItem: mockData }));
    render(
        <DetailPage />
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  test('Detail Page Fields with Empty Data', () => {
    mockUseSelector.mockImplementation((selector) => selector({ selectedItem: [] }));
    render(<DetailPage />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryByRole('row')).toBeNull(); 
  });
});
