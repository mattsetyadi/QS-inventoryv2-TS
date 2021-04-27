import SupplierState from '../Supplier/Store/SupplierReducer';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './History';

const rootReducers = combineReducers({
  router: connectRouter(history),
  SupplierState,
});

export default rootReducers;
