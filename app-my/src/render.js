import React from 'react';
import ReactDOM from 'react-dom';
import {addPost} from './redux/state';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { updateNewPostText, addNewMessage } from './redux/state';
import { updateNewMessage } from './redux/state';

export const rerenderEntireTree = (state) => {
ReactDOM.render(  
    <React.StrictMode>
      <BrowserRouter><App
      addPost={addPost}
        state={state}
        addNewMessage={addNewMessage}
        updateNewMessage={updateNewMessage}
        updateNewPostText={updateNewPostText}
      /></BrowserRouter>
    </React.StrictMode>
    ,
  document.getElementById('root')
);

reportWebVitals();
}