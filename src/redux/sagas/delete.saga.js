import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    yield takeLatest('DELETE_ITEM', deleteItem);
}


function* deleteItem(action) {
    try {
        const id = action.payload 
        const response = yield axios.delete(`/api/shelf/${id}`);

        yield put({ type: 'GET_SHELF' });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

export default deleteItem;