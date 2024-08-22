import { 
    FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, 
    FILTER_DATA, SHOW_DETAIL,CLEAR_FILTER
} from './actions';

const initialState = {
    data: [],
    filteredData: [],
    loading: false,
    error: null,
    selectedItem: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                filteredData: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FILTER_DATA:
            const { ages, costs } = action.payload;
            const filteredData = state.data.filter(item => {
                const ageMatches = ages.length === 0 || ages.includes(item.age);
                const costMatches = costs.every(cost => {
                    const unitCost = item.cost && item.cost[cost.title] ? item.cost[cost.title] : 0;
                    return unitCost >= cost.values[0] && unitCost <= cost.values[1];
                });
                return ageMatches & costMatches;
            });
            return {
                ...state,
                filteredData: filteredData,
            };
      
        case CLEAR_FILTER:
            return {
                ...state,
                filteredData: state.data
            };
        case SHOW_DETAIL:
            return {
                ...state,
                selectedItem: state.data.filter(item => item.id == action.payload)
            };
        default:
            return state;
    }
};
