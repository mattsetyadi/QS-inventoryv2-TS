import { all, fork } from 'redux-saga/effects';

import { fetchInventoryListAction } from '../Inventory/Saga/InventorySaga';
import { fetchSupplierListAction } from '../Supplier/Saga/SupplierSaga';

export default function* Saga() {
  yield all([fork(fetchSupplierListAction), fork(fetchInventoryListAction)]);
}
