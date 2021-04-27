import * as ActionSupplier from '../Store/SupplierAction';

import { call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

function* fetchSupplierListProcess() {
  try {
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_APP_URL}/Supplier/inquiry/0/1000`
    );

    yield put(ActionSupplier.fetchSupplierListFinished(data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchSupplierListAction() {
  yield takeLatest('FETCH_SUPPLIER_LIST_REQUESTED', fetchSupplierListProcess);
}
