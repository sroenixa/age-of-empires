export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FILTER_DATA = 'FILTER_DATA';
export const SHOW_DETAIL = 'SHOW_DETAIL';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const filterData = (filter) => ({
    type: FILTER_DATA,
    payload: filter,
});

export const clearFilter = () => ({
    type: CLEAR_FILTER,
});


export const showDetail = (id) => ({
    type: SHOW_DETAIL,
    payload: id,
});
