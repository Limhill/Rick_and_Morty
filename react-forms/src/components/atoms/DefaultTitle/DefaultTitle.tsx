import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { ParentProps } from 'core/interfaces/props';

const StyledDefaultTitle = styled.h1`
  font-size: 46px;
  color: ${Color.lightBlue};
`;

const DefaultTitle = ({ children }: ParentProps) => {
  return <StyledDefaultTitle>{children}</StyledDefaultTitle>;
};

export default DefaultTitle;
