import styled from 'styled-components';
import { Color } from 'core/enums';

const Select = styled.select`
  background: transparent;
  outline: none;
  font-size: 2.2rem;
  font-family: Roboto, sans-serif;
  border: 0.3rem solid ${Color.lightBlue};
  color: ${Color.white};
  min-width: 50%;
  border-radius: 8px;
  padding: 1rem;
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
