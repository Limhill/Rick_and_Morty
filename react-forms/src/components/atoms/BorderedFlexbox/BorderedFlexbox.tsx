import styled from 'styled-components';
import { Color } from 'core/enums';

const BorderedFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.3rem solid ${Color.lightBlue};
  padding: 1rem;
  border-radius: 0.8rem;
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }
`;

export default BorderedFlexbox;
