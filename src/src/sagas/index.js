import { all } from 'redux-saga/effects'
import signup from './signupSagas';

export default function* root() {
  yield all([
    signup()
  ])
}
