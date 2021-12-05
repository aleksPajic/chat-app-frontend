import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main';

const routing = (
  <>
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  </>
)
ReactDOM.render(routing, document.getElementById('root'));
