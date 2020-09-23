import React from 'react';
import { HashRouter, Switch, Route, } from 'react-router-dom';


// CONTAINERS
import Login from './container/Login';
import Messages from './container/Messages';

// CSS
import './App.css';


function App() {
  
  
  return (
    <>
      <HashRouter>
          <Switch>
            {/* Login Page */}
            <Route  
              path='/'
              exact 
              render={( routeProps ) => (
                <Login 
                  {...routeProps}
                  />  
                )} />
            {/* Messages Page */}
            <Route 
              path='/messages'
              exact
              render={( props ) => (
                <Messages

                  />
                )} />
          </Switch>
      </HashRouter>
    </>
  );
}

export default App;
