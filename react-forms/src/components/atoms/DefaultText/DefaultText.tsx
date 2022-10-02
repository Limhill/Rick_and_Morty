import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { ParentProps } from 'core/interfaces/props';

const StyledDefaultText = styled.p`
  font-size: 32px;
  margin: 0;
  color: ${Color.lightBlue};
`;

const DefaultText = ({ children }: ParentProps) => {
  return <StyledDefaultText>{children}</StyledDefaultText>;
};

export default DefaultText;
