import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    yield takeLatest('DELETE_ITEM', deleteItem);
}


function* deleteItem(action) {
    try {
        const id = action.payload
        yield axios.delete(`/api/shelf/${id}`); //send id of item to delete

        yield put({ type: 'GET_SHELF' }); //call get for updated shelf list
    } catch (error) {
        console.log('User get request failed', error);
    }
}

export default deleteItem;