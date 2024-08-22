import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FILTER_DATA,
    CLEAR_FILTER,
    SHOW_DETAIL,
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure,
    filterData,
    clearFilter,
    showDetail
  } from './actions'; 
  
  describe('Actions', () => {
    test('fetchDataRequest Equals Excepted', () => {
      const expectedAction = {
        type: FETCH_DATA_REQUEST,
      };
      expect(fetchDataRequest()).toEqual(expectedAction);
    });
  
    test('fetchDataSuccess Equals Excepted', () => {
      const data = { id: 1, name: 'Test Item' };
      const expectedAction = {
        type: FETCH_DATA_SUCCESS,
        payload: data,
      };
      expect(fetchDataSuccess(data)).toEqual(expectedAction);
    });
  
    test('fetchDataFailure Equals Excepted', () => {
      const error = 'Error fetching data';
      const expectedAction = {
        type: FETCH_DATA_FAILURE,
        payload: error,
      };
      expect(fetchDataFailure(error)).toEqual(expectedAction);
    });
  
    test('filterData Equals Excepted', () => {
      const filter = { key: 'value' };
      const expectedAction = {
        type: FILTER_DATA,
        payload: filter,
      };
      expect(filterData(filter)).toEqual(expectedAction);
    });
  
    test('clearFilter Equals Excepted', () => {
      const expectedAction = {
        type: CLEAR_FILTER,
      };
      expect(clearFilter()).toEqual(expectedAction);
    });
  
    test('showDetail Equals Excepted', () => {
      const id = '1';
      const expectedAction = {
        type: SHOW_DETAIL,
        payload: id,
      };
      expect(showDetail(id)).toEqual(expectedAction);
    });
  });
  