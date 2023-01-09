import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Route } from 'react-router-dom';
import Root from './root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Route>
    <Root />
  </Route>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
