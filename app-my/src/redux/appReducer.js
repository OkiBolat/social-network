import { authMe } from "./authReducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

const initialState =
{
  initialised: false,
  set: 0
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return {
        ...state, ...state.set + 1
      }
    case INITIALIZED_SUCCES:
      return {
        ...state,
        initialised: true
      }
    default:
      return {
        ...state
      }
  }
};

export const initializedSucces = () => ({ type: INITIALIZED_SUCCES });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authMe())
  promise.then(() => {
    dispatch(initializedSucces())
  })
};

export default appReducer;