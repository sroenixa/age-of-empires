import { expectSaga } from 'redux-saga-test-plan';
import { put, call } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './actions';
import { fetchDataSaga } from './sagas';
import data from '../mock/data.json';

describe('fetchDataSaga', () => {
    it('should handle fetching data successfully', () => {
        return expectSaga(fetchDataSaga)
            .provide([[call(fetchDataSaga), data]])
            .put(fetchDataSuccess(data.units)) 
            .run();
    });
});