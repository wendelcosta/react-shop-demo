// Main app entry point

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './modules/configureStore';
import App from './containers/App';
import './styles/base.css';


// Create the main redux store here when the app is starting up.
const store = configureStore();

// The main component which wraps the app with a redux Provider
const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// Render the app to the DOM
ReactDOM.render(<Main />, document.getElementById('root'));
