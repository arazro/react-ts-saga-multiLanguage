import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import { createBrowserHistory } from 'history'
import 'typeface-ibm-plex-sans';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import  "./assets/fonts/iransans.woff";
import "./assets/style/styles.css";

const history = createBrowserHistory()
const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)


ReactDOM.render(
  <Provider store={store}>
  <App  history={history} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
