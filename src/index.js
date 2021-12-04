import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <Join />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
