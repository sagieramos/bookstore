import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Loading from './components/Loading';
import './index.css';
import App from './components/App';
import store from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div id="App-Wrapper">
        <App />
        <Loading />
      </div>
    </Provider>
  </React.StrictMode>,
);
