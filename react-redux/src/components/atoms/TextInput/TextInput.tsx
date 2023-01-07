import styled from 'styled-components';
import { Color } from 'core/enums';

const TextInput = styled.input`
  background: transparent;
  outline: none;
  font-size: 2.4rem;
  font-family: Roboto, sans-serif;
  border: 0.3rem solid ${Color.lightBlue};
  color: ${Color.white};
  min-width: 50%;
  border-radius: 0.8rem;
  padding: 1rem;
  &::placeholder {
    color: ${Color.white};
    opacity: 0.8;
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }
`;
export default TextInput;
