import { Action } from 'redux';
import { IFetchInventory } from './InventoryAction';

export const initialState: any = {
  list: [],
};

export default function InventoryReducer(state = initialState, action: Action) {
  if (!action) return state;

  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'FETCH_INVENTORY_LIST_FINISHED': {
      const fetchInventory = action as IFetchInventory;
      newState.list = fetchInventory.data;
      return { ...newState };
    }
  }
  return state;
}
