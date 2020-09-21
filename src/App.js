import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// CONTAINERS
import Login from './container/Login';

// CSS
import './App.css';

function App() {
  const [username, getUserName] = useState('');
  const [password, getPassword] = useState('');

  
  return (
    <>
      <HashRouter>
          <Switch>
            {/* Login Page */}
            <Route  
              path='/' 
              render={( props ) => (
                <Login 
                  handleUserName={ getUserName } 
                  handlePassWord={ getPassword }
                  />  
                )} />

          </Switch>
      </HashRouter>
    </>
  );
}

export default App;
