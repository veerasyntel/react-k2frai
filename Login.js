import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';

const Login = (props) => {
  const {
    userName,
    password,
    userNameInput,
    passwordInput,
    handleLogin,
    handleSignUp
  } = props;
  const loginRef = useRef();
  const userNameRef = useRef();

  useEffect(() => {
    // userNameRef.current.focus();
  });
  const Print = () => {
    return (
      <ReactToPrint
        trigger={() => <a href='#'style={{color: 'white'}}>Print</a>}
        content={() => loginRef.current}
      ></ReactToPrint>
    )
  }

  return (
    <>
      <LoginSection ref={loginRef}>
        <Title>Login</Title>
        <Input
          type="text"
          placeholder='User Name'
          inputColor="black"
          onChange={userNameInput}
          value={userName}
          ref={userNameRef}
        />
        <Input
          type="password"
          placeholder='Password'
          inputColor="black"
          onChange={passwordInput}
          value={password}
        />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleSignUp}>Sign Up</Button>
        <Print/>
      </LoginSection>
    </>
  )
}
export default Login;

Login.PropTypes = {
  userNameInput: PropTypes.func,
  passwordInput: PropTypes.func,
  userName: PropTypes.string,
  password: PropTypes.string
}
Login.defaultProps = {
  userNameInput: () => { },
  passwordInput: () => { },
  handleLogin: () => { }
}
const LoginSuccess = styled.section`
  background: lightgrey;
  boder: 1px solid black;
  margin: 1.0em
`;
const LoginSection = styled.section`
  background: grey;
`;
const Title = styled.h3`
  color: orange;
  font-size: 1.5em;
  padding: 1px;
  margin: 10px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em; 
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border-radius: 3px;
  border: 1px solid black;
  display: block;
  :focus {
    background: white;
    color: blue;
  }
  ::placeholder {
    color: grey;
  }  
`;
const Button = styled.button`
  background: lightgreen;
  padding: 0.5em;
  margin: 0.5em
  font-weight: bold;
  border-radius: 5px;
  :hover {
    background: green;
    opacity: 0.9;
  }
`;



