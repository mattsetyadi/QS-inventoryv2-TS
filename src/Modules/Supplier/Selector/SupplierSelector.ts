import { createSelector } from 'reselect';

const supplierState = (state: any) => state.SupplierState;

export const listSelector = () =>
  createSelector(supplierState, (state) => state.list);
