import * as types from './types/appActionTypes';

export function setAppOpened() {
  return {
    type: types.SET_FIRST_OPEN,
  };
}

export function setGlobalNotification({message, type, duration}) {
  return {
    type: types.SET_GLOBAL_NOTIFICATION,
    payload: {
      message, type, duration
    }
  };
}