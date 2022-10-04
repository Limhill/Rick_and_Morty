import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.5rem;

  input {
    visibility: hidden;
    user-focus: none;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.5rem;
  &:before {
    position: absolute;
    border-radius: 50%;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + & {
    background-color: #2196f3;
  }

  input:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + &:before {
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Switcher = () => {
  return (
    <Container>
      <input type="checkbox" />
      <Slider />
    </Container>
  );
};

export default Switcher;
