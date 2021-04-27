import { Action } from 'redux';

export interface IOpenModal extends Action {
  component: string;
}

export interface IToggleSider extends Action {
  status: boolean;
}

export function openModal(component: string): IOpenModal {
  return {
    type: 'OPEN_MODAL',
    component,
  };
}

export function toggleSider(status = false): IToggleSider {
  return {
    type: 'TOGGLE_SIDER',
    status,
  };
}
