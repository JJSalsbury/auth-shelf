import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    yield takeLatest('DELETE_ITEM', deleteItem);
}


function* deleteItem() {
    try {
    
    //   const response = yield axios.delete(`/api/shelf/${item ID here}`);

      yield put({ type: 'GET_SHELF' });
    } catch (error) {
      console.log('User get request failed', error);
    }
  }

export default deleteItem;