import styled from 'styled-components';
import { Color } from 'core/enums';

const Option = styled.option`
  font-size: 2rem;
  color: black;
  &::placeholder {
    color: ${Color.white};
    opacity: 0.8;
  }
`;

export default Option;
