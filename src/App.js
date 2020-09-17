import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './container/Login';

// CSS
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
          <Switch>
            <Route path='/' component={Login} />
          </Switch>
      </HashRouter>
    </>
  );
}

export default App;
