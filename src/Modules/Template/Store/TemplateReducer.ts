import { IOpenModal, IToggleSider } from './TemplateAction';

import { Action } from 'redux';

export const initialState: any = {
  siderIsOpen: false,
  showModalSupplier: false,
  showModalInventory: false,
};

export default function TemplateReducer(state = initialState, action: Action) {
  if (!action) return state;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'TOGGLE_SIDER': {
      const toggleSider = action as IToggleSider;
      newState.siderIsOpen = toggleSider.status;
      return { ...newState };
    }
    case 'OPEN_MODAL': {
      const openModal = action as IOpenModal;
      const component = openModal.component;
      newState[`showModal${component}`] = !state[`showModal${component}`];
      return { ...newState };
    }
  }
  return state;
}
