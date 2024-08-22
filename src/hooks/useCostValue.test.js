import { renderHook } from '@testing-library/react';
import useCostValue from './useCostValue'; 

describe('useCostValue', () => {
  
  test('Returns Cost Value', () => {
    const cost = { Wood: 100, Food: 50, Gold: 30 };
    const { result } = renderHook(() => useCostValue(cost, 'Food'));
    
    expect(result.current).toBe(50);
  });

  test('Returns - Value', () => {
    const cost = { Wood: 100, Food: 50, Gold: 30 };
    const { result } = renderHook(() => useCostValue(cost, 'Stone'));
    
    expect(result.current).toBe('-');
  });

});
