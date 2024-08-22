import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonFilter from './ButtonFilter';

beforeAll(() => {
    global.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
});

describe('ButtonFilter', () => {
    const mockCallback = jest.fn();
  
    test('Render ButtonFilter Without Crashing and With Right Text and Class', () => {
      render(<ButtonFilter text="Button Filter Test" callback={mockCallback} active={true} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Button Filter Test');
      expect(button).toHaveClass('active');
    });

    test('Render ButtonFilter Without Crashing and With Right Text and Class', () => {
        render(<ButtonFilter text="Button Filter Test" callback={mockCallback} active={false} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Button Filter Test');
        expect(button).not.toHaveClass('active');
    });

    test('Click Button and Get Right Callback Value from Function', () => {
        render(<ButtonFilter text="CallbackValue" callback={mockCallback} active={true} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockCallback).toHaveBeenCalledWith('CallbackValue');
        expect(mockCallback).toHaveBeenCalledTimes(1);
    });
});
