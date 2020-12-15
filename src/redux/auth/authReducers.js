import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialState = {
  name: null,
  email: null,
};

const user = createReducer(initialState.user, {
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

// const handleError = () => initialState.error;

const error = createReducer(null, {
  //   [authActions.loginRequest]: handleError,
  //   [authActions.logoutRequest]: handleError,
  //   [authActions.registerRequest]: handleError,
  //   [authActions.getCurrentUserRequest]: handleError,
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
