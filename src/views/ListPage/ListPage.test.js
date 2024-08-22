import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListPage from './ListPage'; 
import { FILTER_DATA, filterData } from '../../store/actions';
import { MemoryRouter } from 'react-router-dom';

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
    "id": 1,
    "name": "Archer",
    "description": "Quick and light. Weak at close range; excels at battle from distance",
    "expansion": "Age of Kings",
    "age": "Feudal",
    "cost": {
      "Wood": 25,
      "Gold": 45
    },
    "build_time": 35,
    "reload_time": 2,
    "attack_delay": 0.35,
    "movement_rate": 0.96,
    "line_of_sight": 6,
    "hit_points": 4,
    "range": 30,
    "attack": 4,
    "armor": "0/0",
    "accuracy": "80%"
  },
  {
    "id": 2,
    "name": "Crossbowman",
    "description": "Upgraded archer",
    "expansion": "Age of Kings",
    "age": "Castle",
    "cost": {
      "Wood": 25,
      "Gold": 45
    },
    "build_time": 27,
    "reload_time": 2,
    "attack_delay": 0.35,
    "movement_rate": 0.96,
    "line_of_sight": 7,
    "hit_points": 35,
    "range": 5,
    "attack": 5,
    "armor": "0/0",
    "attack_bonus": [
      "+3 spearmen"
    ],
    "accuracy": "85%"
  }
];

describe('ListPage', () => {
  
  test('Loading State Renders Message Successfully', () => {
    mockUseSelector.mockImplementation((selector) => selector({ loading: true }));
    render(
        <ListPage />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('Error State Renders Message Successfully', () => {
    mockUseSelector.mockImplementation((selector) => selector({ error: 'Error message' }));
    render(
        <ListPage />
    );
    expect(screen.getByText('Error: Error message')).toBeInTheDocument();
  });

  test('Handle FETCH_DATA_REQUEST Successfully', () => {
    render(
        <ListPage />
    );
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'FETCH_DATA_REQUEST' });
  });

  test('Update Filter By All Button', () => {

    render(
        <ListPage />
    );

    const allButton = screen.getByText('All');
    fireEvent.click(allButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'FILTER_DATA',
      payload: { ages: [], costs: [] }
    });
  });

  test('Update Filter By Age Buttons', () => {
    mockUseSelector.mockImplementation((selector) => {
        return selector({
            data: mockData,
            filteredData: mockData,
        });
    });

    render(
        <MemoryRouter>
            <ListPage />
        </MemoryRouter>
    );

    const buttons = screen.getAllByText('Feudal'); 
    expect(buttons.length).toBeGreaterThan(1); 
    fireEvent.click(buttons[0]);


    expect(mockDispatch).toHaveBeenCalledWith({
        type: FILTER_DATA,
        payload: { ages: ['Feudal'], costs: [] }
    });
});

  test('Click on SliderFilter updates filter', () => {
    mockUseSelector.mockImplementation((selector) => {
        return selector({
            filteredData: mockData,
            data: mockData,
        });
    });

    render(
        <MemoryRouter>
            <ListPage />
        </MemoryRouter>
    );
    const woodSlider = screen.getByText('Wood');
    fireEvent.click(woodSlider);

    expect(mockDispatch).toHaveBeenCalledWith({
        type: FILTER_DATA,
        payload: {
            ages: [],
            costs: [
                {
                    title: 'Wood',
                    values: [0, 200] 
                }
            ]
        }
    });
  });


  test('ListTable Renders Rows Correctly', () => {
        mockUseSelector.mockImplementation((selector) => {
            return selector({
                filteredData: mockData,
                data: mockData
            });
        });

      render(<MemoryRouter><ListPage /></MemoryRouter>);
      expect(screen.getByText('Archer')).toBeInTheDocument();
      expect(screen.getByText('Crossbowman')).toBeInTheDocument();
  });

   

});
