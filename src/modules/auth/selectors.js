import {createSelector} from 'reselect';

const authSelector = (state) => state.auth;

export const tokenSelector = createSelector(
  authSelector,
  (authReducer) => authReducer.token,
);

export const loginLoadingSelector = createSelector(
  authSelector,
  (authReducer) => authReducer.loginLoading,
);

export const signUpLoadingSelector = createSelector(
  authSelector,
  (authReducer) => authReducer.signUpLoading,
);

export const setPasswordLoadingSelector = createSelector(
  authSelector,
  (authReducer) => authReducer.setPasswordLoading,
);
