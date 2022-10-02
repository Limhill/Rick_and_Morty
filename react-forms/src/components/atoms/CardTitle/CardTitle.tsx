import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { ParentProps } from 'core/interfaces/props';

const StyledCardTitle = styled.h2`
  max-width: calc(100% - 2rem);
  text-align: center;
  padding: 0 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${Color.black};
`;

const CardTitle = ({ children }: ParentProps) => {
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

export default CardTitle;
