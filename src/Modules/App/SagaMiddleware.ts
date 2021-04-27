import { all, fork } from 'redux-saga/effects';

import { fetchSupplierListAction } from '../Supplier/Saga/SupplierSaga';

export default function* Saga() {
  yield all([fork(fetchSupplierListAction)]);
}
