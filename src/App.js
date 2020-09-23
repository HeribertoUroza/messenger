import React, { useState } from 'react';
import { HashRouter, Switch, Route, } from 'react-router-dom';
import firebase from './firebase/firebase';

// CONTAINERS
import Login from './container/Login';
import Messages from './container/Messages';

// CSS
import './App.css';


function App() {
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');
  const [errorMessage, getError] = useState('');

  const handleSignUpOrLogIn = loginOrSignUp => {
    // IF TRUE SIGN UP, ELSE LOGIN
   
    loginOrSignUp ? 
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( _=>{
          this.props.history.push('#/messages')
        })
        .catch( error => {
          getError(error.message)
        })
      :
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then( _=>{
          console.log('worked')
        })
        .catch( error => {
          console.log(error.message)
          getError(error.message)
        })
  }
  
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
                  handleEmail={ getEmail } 
                  handlePassWord={ getPassword }
                  handleSignUpOrLogIn={ handleSignUpOrLogIn }
                  errorMessage={ errorMessage }
                  {...routeProps}
                  />  
                )} />
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
