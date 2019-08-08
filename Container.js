import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

const Container = (props) => {
  const { history } = props;
  const [userName, setUSerName] = useState('');
  const [password, setPassword] = useState('');
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userSearched, setUserSearched] = useState(false);

  const userNameInput = event => {
    setUSerName(event.target.value);
  }
  const passwordInput = (event) => {
    setPassword(event.target.value);
  }
  const handleLogin = (event) => {
    setUserAuthenticated(true);
    history.push('/home');
  }

  const handleSignUp = (event) => {
    setUserSearched(true);
    history.push('/about');
  }
  
  return (
    <>
      {!userAuthenticated && (
        <Login
          userName={userName}
          passwor={password}
          userNameInput={userNameInput}
          passwordInput={passwordInput}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
        >
        </Login>
      )}
      {!userAuthenticated && (
        <Home />
        
      )}
       {userSearched && (
        <About>
        </About>
      )}
     
    </>
  )
}
export default Container;