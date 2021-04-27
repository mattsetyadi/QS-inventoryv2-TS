import * as ActionInventory from '../Store/InventoryAction';

import { call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

// import * as SelectorInventory from '../Selector/InventorySelector'

function* fetchInventoryListProcess() {
  try {
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_APP_URL}/InventoryItem/inquiry/0/1000`
    );
    yield put(ActionInventory.fetchInventoryListFinished(data.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchInventoryListAction() {
  yield takeLatest('FETCH_INVENTORY_LIST_REQUESTED', fetchInventoryListProcess);
}
