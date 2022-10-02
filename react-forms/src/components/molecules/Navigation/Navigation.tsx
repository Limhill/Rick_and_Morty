import React from 'react';
import styled from 'styled-components';
import { ParentProps } from 'core/interfaces/props';

const StyledNavigation = styled.nav`
  display: flex;
  padding-top: 5rem;
  justify-content: space-around;
`;

const Navigation = ({ children }: ParentProps) => {
  return <StyledNavigation>{children}</StyledNavigation>;
};

export default Navigation;
