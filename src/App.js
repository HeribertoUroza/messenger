import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import firebase from './firebase/firebase';

// CONTAINERS
import Login from './container/Login';

// CSS
import './App.css';

function App() {
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');

  const handleSignUpOrLogIn = loginOrSignUp => {
    // IF TRUE SIGN UP, ELSE LOGIN
   
    loginOrSignUp ? 
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( _=>{
          console.log('create', email)
        })
        .catch( error => {
          console.log(email,password,error)
        })
      :
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then( _=>{
          console.log('signed in', email)
        })
        .catch( error => {
          console.log(error)
        })
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
                  handleEmail={ getEmail } 
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
