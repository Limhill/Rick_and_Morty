import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';

const CheckBoxContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
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

  input {
    visibility: hidden;
  }
`;

const Checkmark = styled.span`
  height: 22px;
  width: 22px;
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
    left: 0.7rem;
    top: 0.3rem;
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

const Checkbox = () => {
  return (
    <CheckBoxContainer>
      It is a human?
      <input type="checkbox" />
      <Checkmark></Checkmark>
    </CheckBoxContainer>
  );
};

export default Checkbox;
