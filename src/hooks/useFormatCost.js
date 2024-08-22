import { useCallback } from 'react';

const useFormatCost = () => {
  const formatCost = useCallback((cost) => {
    if (!cost) return ''; 
    return Object.entries(cost)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
  }, []);

  return formatCost;
};

export default useFormatCost;