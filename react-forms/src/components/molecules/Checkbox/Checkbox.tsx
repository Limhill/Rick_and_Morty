import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { SwitcherProps } from 'core/interfaces/props';

const CheckBoxContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: white;
  border: 0.3rem solid ${Color.lightBlue};
  border-radius: 0.8rem;
  padding: 1rem 1rem 1rem 1rem;
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }

  input {
    visibility: hidden;
  }
`;

const Checkmark = styled.span`
  height: 18px;
  width: 18px;
  background-color: #eee;
  position: relative;

  ${CheckBoxContainer}:hover > & {
    background-color: #ccc;
  }
  ${CheckBoxContainer} input:checked ~ & {
    background-color: ${Color.lightBlue};
  }
  &:after {
    position: absolute;
    left: 0.5rem;
    top: 0.1rem;
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    transform: rotate(45deg);
  }
  ${CheckBoxContainer} input:checked ~ &:after {
    background-color: ${Color.lightBlue};
    border: solid ${Color.black};
    border-width: 0 3px 3px 0;
  }
`;

const Checkbox = ({ handler }: SwitcherProps) => {
  const handleChange = () => {
    handler();
  };
  return (
    <CheckBoxContainer>
      It is a human?
      <input type="checkbox" onChange={handleChange} />
      <Checkmark></Checkmark>
    </CheckBoxContainer>
  );
};

export default Checkbox;