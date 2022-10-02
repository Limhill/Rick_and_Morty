import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { ParentProps } from 'core/interfaces/props';

const StyledMainPageTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: ${Color.lightBlue};
  margin-bottom: 3rem;
`;

const MainPageTitle = ({ children }: ParentProps) => {
  return <StyledMainPageTitle>{children}</StyledMainPageTitle>;
};

export default MainPageTitle;
