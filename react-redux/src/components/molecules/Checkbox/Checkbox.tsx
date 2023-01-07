import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Color, formFieldName } from 'core/enums';
import { SwitcherProps } from 'core/interfaces/props';
import Label from 'components/atoms/Label';

const CheckBoxContainer = styled.div`
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

  label:hover > & {
    background-color: #ccc;
  }
  label input:checked ~ & {
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
  label input:checked ~ &:after {
    background-color: ${Color.lightBlue};
    border: solid ${Color.black};
    border-width: 0 3px 3px 0;
  }
`;

const Checkbox = forwardRef<HTMLInputElement, SwitcherProps>(({ resetErrorMessages }, ref) => {
  return (
    <label htmlFor="species">
      <Label as="div">Check species</Label>
      <CheckBoxContainer>
        Is it a human?
        <input
          id="species"
          ref={ref}
          type="checkbox"
          onChange={resetErrorMessages}
          name={formFieldName.species}
        />
        <Checkmark />
      </CheckBoxContainer>
    </label>
  );
});

export default Checkbox;
