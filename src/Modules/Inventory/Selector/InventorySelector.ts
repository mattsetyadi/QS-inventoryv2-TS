import { createSelector } from 'reselect';

const inventoryState = (state: any) => state?.InventoryState;

export const listSelector = () =>
  createSelector(inventoryState, (state) => state.list);
