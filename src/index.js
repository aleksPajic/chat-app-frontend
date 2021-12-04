import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main';

const routing = (
  <>
    <h1>Testing</h1>
    <Router>
      <div>
        <h1>React Router Example</h1>
        <Main />
      </div>
    </Router>
  </>
)
ReactDOM.render(routing, document.getElementById('root'));
