import React from 'react';
import styled from 'styled-components';
import { ParentProps } from 'core/interfaces/props';

const StyledContent = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
`;

const Content = ({ children }: ParentProps) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
