import React, { useState } from 'react';
import { HashRouter, Switch, Route, } from 'react-router-dom';

// CONTAINERS
import Login from './container/Login';
import Messages from './container/Messages';

// CONTEXT
import AuthContext from './context/AuthContext';

// CSS
import './App.css';


function App() {
  const [ isUser, getUser ] = useState(null);

  return (
    <>
      <HashRouter>
        <AuthContext.Provider value={ isUser }>
          <Switch>
            {/* Login Page */}
            <Route  
              path='/'
              exact 
              render={( routeProps ) => (
                <Login
                  getUser={getUser} 
                  {...routeProps}
                  />  
                )} />
                
            {/* Messages Page */}
            <Route 
              path='/messages'
              exact
              render={( routeProps ) => (
                <Messages

                  />
                )} />
          </Switch>
        </AuthContext.Provider>
      </HashRouter>
    </>
  );
}

export default App;
