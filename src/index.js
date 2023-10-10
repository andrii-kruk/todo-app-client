import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/todo-app-client">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
