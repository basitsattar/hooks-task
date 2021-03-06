import { fork, all } from 'redux-saga/effects';
import { authWatcher } from '../auth';

export default function* rootSaga() {
  yield all([
    fork(authWatcher)
  ]);
}
