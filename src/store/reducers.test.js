import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FILTER_DATA,
    SHOW_DETAIL,
    CLEAR_FILTER
} from './actions';
import { reducer } from './reducers';
  
describe('Reducer', () => {
    const initialState = {
      data: [],
      filteredData: [],
      loading: false,
      error: null,
      selectedItem: [],
    };
  
    test('FETCH_DATA_REQUEST Handled Successfully', () => {
      const action = { type: FETCH_DATA_REQUEST };
      const expectedState = {
        ...initialState,
        loading: true,
        error: null
      };
      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  
    test('FETCH_DATA_SUCCESS Handled Successfully', () => {
      const data = [{ id: 1, age: 25, cost: { Wood: 100, Food: 50 } },   { id: 2, age: 30, cost: { Wood: 150, Food: 70 } }];
      const action = { type: FETCH_DATA_SUCCESS, payload: data };
      const expectedState = {
        ...initialState,
        loading: false,
        data: data,
        filteredData: data
      };
      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  
    test('FETCH_DATA_FAILURE Handled Successfully', () => {
      const error = 'Error message';
      const action = { type: FETCH_DATA_FAILURE, payload: error };
      const expectedState = {
        ...initialState,
        loading: false,
        error: error
      };
      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  
    test('FILTER_DATA Handled Successfully', () => {
      const initialStateWithData = {
        ...initialState,
        data: [
          { id: 1, age: 25, cost: { Wood: 100, Food: 50 } },
          { id: 2, age: 30, cost: { Wood: 150, Food: 70 } }
        ]
      };
      const action = {
        type: FILTER_DATA,
        payload: {
          ages: [25],
          costs: [{ title: 'Wood', values: [50, 120] }]
        }
      };
      const expectedState = {
        ...initialStateWithData,
        filteredData: [
          { id: 1, age: 25, cost: { Wood: 100, Food: 50 } }
        ]
      };
      expect(reducer(initialStateWithData, action)).toEqual(expectedState);
    });
  
    test('CLEAR_FILTER Handled Successfully', () => {
      const initialStateWithFilter = {
        ...initialState,
        data: [{ id: 1 }, { id: 2 }],
        filteredData: [{ id: 1 }]
      };
      const action = { type: CLEAR_FILTER };
      const expectedState = {
        ...initialStateWithFilter,
        filteredData: [{ id: 1 }, { id: 2 }]
      };
      expect(reducer(initialStateWithFilter, action)).toEqual(expectedState);
    });
  
    test('SHOW_DETAIL Handled Successfully', () => {
      const initialStateWithData = {
        ...initialState,
        data: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' }
        ]
      };
      const action = { type: SHOW_DETAIL, payload: 1 };
      const expectedState = {
        ...initialStateWithData,
        selectedItem: [
          { id: 1, name: 'Item 1' }
        ]
      };
      expect(reducer(initialStateWithData, action)).toEqual(expectedState);
    });
  
  });
  