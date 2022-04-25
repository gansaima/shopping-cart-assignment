import * as actionTypes from './actionTypes';

export const setUserLoggedInStatus = (isUserLoggedIn) => ({
    type: actionTypes.SET_USER_LOGGED_IN_STATUS,
    payload: isUserLoggedIn
});

export const loginUserRequest = (loginObj, navigate) => ({
    type: actionTypes.LOGIN_USER_REQUEST,
    payload: {loginObj, navigate}
});

export const loginUserResponse = () => ({
    type: actionTypes.LOGIN_USER_RESPONSE
});

export const registerUserRequest = (requestObj, navigate) => ({
    type: actionTypes.REGISTER_USER_REQUEST,
    payload: {requestObj, navigate}
});

export const registerUserResponse = (updatedUsers) => ({
    type: actionTypes.REGISTER_USER_RESPONSE,
    payload: updatedUsers
});