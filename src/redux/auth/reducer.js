/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import authState from '../../initialstate'

const initialState = {
  user: undefined,
  loading: false,
  success: false,
  errorMessage: '',
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,

  reducers: {
    signup(state) {
      state.loading = true;
    },
    signupSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    signupFail(state) {
      state.loading = false;
    },
    signIn(state) { state.loading = true; },
    signInSuccess(state, action) {
      return {
        ...state,
        user: action.payload.data.user,
        token: action.payload.data.token,
        loading: false,
        success: true
      };
    },
    signInFail(state) {
      state.loading = false;
    },
    forgotPassword(state) {
      state.loading = true;
    },
    forgotPasswordSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    forgotPasswordFail(state) {
      state.loading = false;
    },
    verifyEmail(state) {
      state.loading = true;
    },
    verifyEmailSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    verifyEmailFail(state) {
      state.loading = false;
    },
    resetPassword(state) {
      state.loading = true;
    },
    resetPasswordSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    resetPasswordFail(state) {
      state.loading = false;
    },
    resetAuth(state) {
      return {
        ...state,
        loading: false,
        success: false
      };
    },
    logout(state){
      return {
        user:undefined,
        token:null,
        success:null
      }
    }
  },
  
});

export const { actions, reducer } = authSlice;
// export const {
//   signup, signupSuccess, signupFail, signIn, signInSuccess, signInFail
// } = actions;
