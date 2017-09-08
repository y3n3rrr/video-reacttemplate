import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appState from './App/AppState/AppState'

  
ReactDOM.render(<App appState={appState} />,document.getElementById('root'));
registerServiceWorker();
