import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from './Gallery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Gallery />, document.getElementById('gallery'));
registerServiceWorker();
