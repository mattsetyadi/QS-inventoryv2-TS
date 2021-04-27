import { createSelector } from 'reselect';

const templateState = (state: any) => state.TemplateState;

export const sideIsOpenSelector = () =>
  createSelector(templateState, (state) => state.siderIsOpen);
export const modalSupplierSelector = () =>
  createSelector(templateState, (state) => state.showModalSupplier);
export const modalInventorySelector = () =>
  createSelector(templateState, (state) => state.showModalInventory);
