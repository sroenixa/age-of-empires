import { renderHook } from '@testing-library/react';
import useFormatCost from './useFormatCost';

describe('useFormatCost', () => {
  test('Return an Empty String for Empty Object', () => {
    const { result } = renderHook(() => useFormatCost());
    const formatCost = result.current;

    expect(formatCost({})).toBe('');
  });

  test('Format Correctly', () => {
    const { result } = renderHook(() => useFormatCost());
    const formatCost = result.current;

    const cost = { Wood: 40, Gold: 70 };
    expect(formatCost(cost)).toBe('Wood: 40, Gold: 70');
  });

  test('Format Correctly with One Entry', () => {
    const { result } = renderHook(() => useFormatCost());
    const formatCost = result.current;

    const cost = { Food: 70 };
    expect(formatCost(cost)).toBe('Food: 70');
  });

  test('Return an Empty String for Empty String', () => {
    const { result } = renderHook(() => useFormatCost());
    const formatCost = result.current;

    expect(formatCost('')).toBe('');
  });

});
