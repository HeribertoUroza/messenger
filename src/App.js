import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// CONTAINERS
import Login from './container/Login';

// CSS
import './App.css';

function App() {
  const [username, getUserName] = useState('');
  const [password, getPassword] = useState('');
  
  const handleSignUpOrLogIn = loginOrSignUp => {
    console.log(loginOrSignUp)
    // IF TRUE SIGN UP, ELSE LOGIN
    
  }
  
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
                  handleSignUpOrLogIn={ handleSignUpOrLogIn }
                  />  
                )} />

          </Switch>
      </HashRouter>
    </>
  );
}

export default App;
