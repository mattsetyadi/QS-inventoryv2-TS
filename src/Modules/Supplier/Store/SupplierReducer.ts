import { Action } from 'redux';
import { IFetchSupplier } from './SupplierAction';

export const initialState: any = {
  list: [],
};

export default function SupplierReducer(state = initialState, action: Action) {
  if (!action) return state;

  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'FETCH_SUPPLIER_LIST_FINISHED': {
      const fetchSupplier = action as IFetchSupplier;
      newState.list = fetchSupplier.data;
      return { ...newState };
    }
  }
  return state;
}
