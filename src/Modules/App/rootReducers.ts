import InventoryState from '../Inventory/Store/InventoryReducer';
import SupplierState from '../Supplier/Store/SupplierReducer';
import TemplateState from '../Template/Store/TemplateReducer';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './History';

const rootReducers = combineReducers({
  router: connectRouter(history),
  SupplierState,
  InventoryState,
  TemplateState,
});

export default rootReducers;
