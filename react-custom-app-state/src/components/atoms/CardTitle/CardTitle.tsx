import styled from 'styled-components';
import { Color } from 'core/enums';

const CardTitle = styled.h2`
  max-width: calc(100% - 2rem);
  text-align: center;
  padding: 2rem 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${Color.black};
  margin: 0;
`;

export default CardTitle;
