import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE'
const initialState =
{
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    case SET_AUTH_USER_PROFILE: {
      return {
        ...state, user: action.user
      }
    }
    default:
      return {
        ...state
      }
  }
};

export const setAuthUserData = (userId, login, email, isAuth) =>
({
  type: SET_USER_DATA,
  data: {
    userId, login, email, isAuth
  }
});

export const setAuthUserProfile = (user) => ({
  type: SET_AUTH_USER_PROFILE,
  user
});

export const authMe = () => dispatch => {
  return usersAPI.authMe().then(resp => {
    if (resp.data.resultCode === 0) {
      const { id, login, email } = resp.data.data
      dispatch(setAuthUserData(id, login, email, true))
      usersAPI.getProfileUser(id).then(data => {
        dispatch(setAuthUserProfile(data))
      })
    }
  })
};

export const authLogin = (formData) => {
  return (dispatch) => {
    profileAPI.authLogin(formData).then(resp => {
      if (resp.data.resultCode === 0) {
        dispatch(authMe())
      } else {
        let message = !resp.data.messages > 0 ? 'Some error' : resp.data.messages[0]
        dispatch(stopSubmit('login', { _error: message }))
      }
    })
  }
};

export const logout = () => {
  return (dispatch) => {
    profileAPI.logout().then(resp => {
      if (resp.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(setAuthUserProfile(null))
        dispatch(authMe())
      }
    })
  }
};

export default authReducer;