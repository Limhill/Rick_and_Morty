import styled from 'styled-components';
import { Color } from 'core/enums';

const CardSide = styled.div`
  width: 100%;
  height: 100%;
  background: ${Color.cardBackground};
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 0 0 15px 10px ${Color.cardHighlight}};
}
`;

export default CardSide;
