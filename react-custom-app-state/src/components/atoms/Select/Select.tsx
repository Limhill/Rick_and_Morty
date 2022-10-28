import styled from 'styled-components';
import { Color } from 'core/enums';
import { SelectProps } from 'core/interfaces/props';

const Select = styled.select<SelectProps>`
  background: transparent;
  outline: none;
  font-size: 2.2rem;
  font-family: Roboto, sans-serif;
  border: 0.3rem solid ${Color.lightBlue};
  color: ${Color.white};
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}%` : 'initial')};
  border-radius: 8px;
  padding: ${({ padding }) => (padding ? `${padding}rem` : 0)};
  cursor: pointer;
  &::placeholder {
    color: ${Color.white};
    opacity: 0.8;
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }
`;

export default Select;
