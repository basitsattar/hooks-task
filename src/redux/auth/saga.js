import { put, call, takeLatest } from 'redux-saga/effects';
import { errorNotification, successNotification } from '../../utils';
import * as api from './service';
import { actions } from './reducer';

function* singUpSaga(action) {
  try {
    const result = yield call(api.signUpUser, action.payload);
    successNotification(result);
    yield put(actions.signupSuccess({ ...result.data }));
    yield put(actions.resetAuth());
  } catch (error) {
    errorNotification(error);
    yield put(actions.signupFail({ ...error }));
  }
}

function* singInSaga(action) {
  try {
    const result = yield call(api.signInUser, action.payload);
    successNotification(result);
    yield put(actions.signInSuccess(result.data));
    yield put(actions.resetAuth());
  } catch (error) {
    errorNotification(error);
    yield put(actions.signInFail({ ...error }));
  }
}

function* forgotPasswordSaga(action) {
  try {
    const result = yield call(api.forgotPasswordApi, action.payload);
    successNotification(result);
    yield put(actions.forgotPasswordSuccess({ ...result.data }));
    yield put(actions.resetAuth());
  } catch (error) {
    errorNotification(error);
    yield put(actions.forgotPasswordFail({ ...error }));
  }
}

function* verifyEmailSaga(action) {
  try {
    const result = yield call(api.verifyEmailApi, action.payload);
    successNotification(result);
    yield put(actions.verifyEmailSuccess({ ...result }));
    yield put(actions.resetAuth());
  } catch (error) {
    errorNotification(error);
    yield put(actions.verifyEmailFail({ ...error }));
  }
}
function* resetPasswordSaga(action) {
  try {
    const result = yield call(api.resetPasswordApi, action.payload);
    successNotification(result);
    yield put(actions.resetPasswordSuccess({ ...result }));
    yield put(actions.resetAuth());
  } catch (error) {
    errorNotification(error);
    yield put(actions.resetPasswordFail({ ...error }));
  }
}

export default function* authWatcher() {
  yield takeLatest(actions.signup.type, singUpSaga);
  yield takeLatest(actions.signIn.type, singInSaga);
  yield takeLatest(actions.verifyEmail.type, verifyEmailSaga);
  yield takeLatest(actions.forgotPassword.type, forgotPasswordSaga);
  yield takeLatest(actions.resetPassword.type, resetPasswordSaga);
}
