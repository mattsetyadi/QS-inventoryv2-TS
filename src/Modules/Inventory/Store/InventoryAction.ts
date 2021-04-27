import { Action } from 'redux';

export interface IFetchInventory extends Action {
  data: object;
}

export function fetchInventoryListRequested() {
  return {
    type: 'FETCH_INVENTORY_LIST_REQUESTED',
  };
}
export function fetchInventoryListFinished(data: object): IFetchInventory {
  return {
    type: 'FETCH_INVENTORY_LIST_FINISHED',
    data,
  };
}
