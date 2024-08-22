import { put, takeLatest } from 'redux-saga/effects';
import { 
    FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure 
} from './actions';
import data from '../mock/data.json'; 


export function* fetchDataSaga() {
    try {
        yield put(fetchDataSuccess(data.units));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
}

export function* watchFetchData() {
    yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
