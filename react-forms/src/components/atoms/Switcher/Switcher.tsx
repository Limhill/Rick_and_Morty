import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { SwitcherProps } from 'core/interfaces/props';

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 2.4rem;

  input {
    visibility: hidden;
    user-focus: none;
    width: 0;
    height: 0;
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
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2px;
    background-color: ${Color.black};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + & {
    background-color: ${Color.lightBlue};
  }

  input:checked + &:before {
    -ms-transform: translateX(30px);
    transform: translateX(30px);
  }
`;

const Switcher = ({ handler }: SwitcherProps) => {
  const handleChange = () => {
    handler();
  };
  return (
    <Container>
      <input type="checkbox" onChange={handleChange} />
      <Slider />
    </Container>
  );
};

export default Switcher;
