import { put, takeLatest, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { signupActionTypes } from '../actions/types';
import { AppActions, SignupActions, LoginActions } from '../actions';
import { attempSignup } from '../common/firebase/signup';
import {
  createAccount
} from '../common/firebase/database';

const { setGlobalNotification } = AppActions;
const { signUpSuccess, signUpFailed } = SignupActions;
const { tryLogin } = LoginActions;

export default function* watcher() {
  const types = signupActionTypes;
  yield takeLatest(types.SIGNUP_REQUEST, trySignup);
}

export function* trySignup(action) {
  const { signupInfo } = action.payload;
  console.log('===== signupInfo: ', signupInfo);
  const { firstName, lastName, email, password, birthday } = signupInfo;
  var errorMessage = null;
  try {
    const res = yield call(attempSignup, {email, password});
    if (res.error) {
      yield put(signUpFailed(res.error));
      yield put(setGlobalNotification({
        message: res.error,
        type: 'danger',
        duration: 6000
      }));
      return;
    }
    const resCreateUser = yield call(
      createAccount,
      {credential: res.credential, signupInfo}
    );
    console.log('==== resCreateUser: ', resCreateUser);
    yield put(signUpSuccess());
    Actions.signin();
    yield put(tryLogin({email, password}));
    return;
  } catch (e) {
    console.log('===== e: ', e);
    var errorMessage = e.message;
    if(e.code === 'auth/email-already-in-use')
      errorMessage = 'The phone number is already registered. Please try again with other phone number.';
    yield put({
      type: signupActionTypes.SIGNUP_FAILURE,
      payload: {statusMessage: errorMessage}
    });
    yield put(setGlobalNotification({
      message: errorMessage,
      type: 'danger',
      duration: 6000
    }));
  }
}
