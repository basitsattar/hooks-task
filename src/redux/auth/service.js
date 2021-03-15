/* eslint-disable import/prefer-default-export */
import { API } from '../../utils';

export const signUpUser = (data) => {
  return API.post('/auth/signUp', data);
};

export const signInUser = (data) => {
  return API.post('/auth/signIn', data);
};

export const verifyEmailApi = (data) => {
  return API.patch('/auth/verifyAccount', data);
};

export const forgotPasswordApi = (data) => {
  return API.post('/auth/forgotPassword', data);
};
export const resetPasswordApi = (data) => {
  return API.patch('/auth/resetPassword', data);
};

export const resendCodeApi = (data) => {
  return API.post('/auth/resend', data);
};
