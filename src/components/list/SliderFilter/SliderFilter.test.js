import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SliderFilter from './SliderFilter';

beforeAll(() => {
    global.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
});

describe('SliderFilter', () => {
  const mockCallback = jest.fn();

  test('Render Without Crashing', () => {
    render(<SliderFilter text="Test" callback={mockCallback} active={true} min={0} max={100} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Display Text Range Successfully', () => {
    render(<SliderFilter text="Test" callback={mockCallback} active={false} min={0} max={100} />);
    expect(screen.getByText('0 - 100')).toBeInTheDocument();
  });

  test('Toggle Checkboxs And Callback Result is Success', () => {
    render(<SliderFilter text="Test" callback={mockCallback} active={false} min={0} max={100} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockCallback).toHaveBeenCalledWith({ title: 'Test', values: [0, 100], checked: false });
  });

  test('Slider Change and Callback Result is Success', () => {
    render(<SliderFilter text="Test" callback={mockCallback} active={false} min={0} max={100} />);
      const thumb1 = screen.getAllByRole('slider')[0];
      fireEvent.focus(thumb1);
      fireEvent.keyDown(thumb1, { key: 'ArrowRight', keyCode: 39 }); 
      fireEvent.keyDown(thumb1, { key: 'ArrowRight', keyCode: 39 }); 
  
      const thumb2 = screen.getAllByRole('slider')[1];
  
      fireEvent.focus(thumb2);
      fireEvent.keyDown(thumb2, { key: 'ArrowLeft', keyCode: 37 });
      fireEvent.keyDown(thumb2, { key: 'ArrowLeft', keyCode: 37 });
    expect(mockCallback).toHaveBeenCalledWith({ title: 'Test', values: [2, 99], checked: true });
  });

  test('Slider is Disabled When Checkbox is Unchecked ', () => {
    render(<SliderFilter text="Test" callback={mockCallback} active={true} min={0} max={100} />);
    const slider = document.querySelector('.slider');
    expect(slider).toHaveClass('disabled');
  });


});
