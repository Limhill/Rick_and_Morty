import styled from 'styled-components';
import { Color } from 'core/enums';

const Label = styled.label`
  color: ${Color.lightBlue};
  font-size: 2rem;
  &:not(:first-child) {
    padding-top: 2rem;
  }
  &:not(:last-child) {
    padding-bottom: 1rem;
  }
`;

export default Label;
