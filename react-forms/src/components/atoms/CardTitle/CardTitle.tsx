import styled from 'styled-components';
import { Color } from 'core/enums';

const CardTitle = styled.h2`
  max-width: calc(100% - 2rem);
  text-align: center;
  padding: 0 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${Color.black};
`;

export default CardTitle;
