import React from 'react';
import styled from 'styled-components';

const Home = (props) => {
const { onSubmitButton } = props;
  return (
    <>
      <Button onClick={onSubmitButton}>Search</Button>
    </>
  )
}

export default Home;

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