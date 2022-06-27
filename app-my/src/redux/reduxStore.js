// eslint-disable-next-line no-unused-vars
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import { reducer as reduxFormReducer } from 'redux-form';
import appReducer from "./appReducer";
import todosReducer from "./todosReducer";

const reducers = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: reduxFormReducer,
  todos: todosReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;