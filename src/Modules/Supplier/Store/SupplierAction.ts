import { Action } from 'redux';

export interface IFetchSupplier extends Action {
  data: object;
}

// Fetching
export function fetchSupplierListRequested() {
  return {
    type: 'FETCH_SUPPLIER_LIST_REQUESTED',
  };
}

export function fetchSupplierListFinished(data: object): IFetchSupplier {
  return {
    type: 'FETCH_SUPPLIER_LIST_FINISHED',
    data,
  };
}
