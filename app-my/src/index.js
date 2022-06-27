import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore.js';
import { Provider } from 'react-redux';

// setInterval(() => {
//   store.dispatch({type: 'SET'})
// }, 1000);
// export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root')
  );

  reportWebVitals();
// }
// rerenderEntireTree(store.getState())

// store.subscribe(rerenderEntireTree)
