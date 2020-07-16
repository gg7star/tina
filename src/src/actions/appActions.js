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

export function setGeoLocation({lat, lng}){
  return{
    type: types.SET_GEOLOCATION,
    payload: {lat, lng}
  }
}

export function setPushNotificationIds({ device }) {
  return {
    type: types.SET_PUSH_NOTIFICATION_IDS,
    payload: { onesignal: device }
  }
}

export function setAdMobId({ adMobId }) {
  return {
    type: types.SET_ADMOB_ID,
    payload: { adMobId }
  }
}