import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getShelf() {
    // get all movies from the DB
    try {
        const shelf = yield axios.get('/api/shelf');
        console.log('get all:', shelf.data);
        yield put({ type: 'SET_ITEMS', payload: shelf.data });

    } catch {
        console.log('get all error');
    }
}

function* shelfSaga() {
    yield takeLatest('GET_SHELF', getShelf);
}

export default shelfSaga;