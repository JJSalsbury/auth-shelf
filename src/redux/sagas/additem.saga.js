import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired at 'ADD_NEW_ITEM' dispatch from /ShelfForm
function* addItem(action) {
  try {
    yield axios.post('/api/shelf', action.payload);

  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* newItemSaga() {
  yield takeLatest('ADD_NEW_ITEM', addItem);
}

export default newItemSaga;
