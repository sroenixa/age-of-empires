import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DetailTable from './DetailTable';

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

describe('DetailTable', () => {
    test('Render DetailTable With Right Head and Values', () => {
        render(<DetailTable data={mockData} />);

        expect(screen.getByRole('table')).toBeInTheDocument();
    
        expect(screen.getByText('ID:')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    
        expect(screen.getByText('Name:')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
    
        expect(screen.getByText('Description:')).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();
    
        expect(screen.getByText('Min. Required Age:')).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument();
    
        expect(screen.getByText('Wood Cost:')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    
        expect(screen.getByText('Food Cost:')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
    
        expect(screen.getByText('Gold Cost:')).toBeInTheDocument();
        expect(screen.getByText('25')).toBeInTheDocument();
    
        expect(screen.getByText('Build Time:')).toBeInTheDocument();
        expect(screen.getByText('10m')).toBeInTheDocument();
    
        expect(screen.getByText('Reload Time:')).toBeInTheDocument();
        expect(screen.getByText('5m')).toBeInTheDocument();
    
        expect(screen.getByText('Hit Points:')).toBeInTheDocument();
        expect(screen.getByText('120')).toBeInTheDocument();
    
        expect(screen.getByText('Attack:')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
    
        expect(screen.getByText('Accuracy:')).toBeInTheDocument();
        expect(screen.getByText('80')).toBeInTheDocument();
    })

});