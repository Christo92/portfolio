import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
// Component
import App from './components/App';
import './styles/index.scss';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.querySelector('#root')
);