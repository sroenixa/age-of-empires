import { useMemo } from 'react';

const useCostValue = (cost, key) => {
    return useMemo(() => {
        if (!cost || !key) return '-'; 
        const entry = Object.entries(cost).find(([k]) => k === key);
        return entry ? entry[1] : '-'; 
    }, [cost, key]);
};

export default useCostValue;