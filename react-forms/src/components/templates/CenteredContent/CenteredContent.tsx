import React from 'react';
import styled from 'styled-components';
import { ParentProps } from 'core/interfaces/props';

const StyledCenteredContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1440px;
`;

const CenteredContent = ({ children }: ParentProps) => {
  return <StyledCenteredContent>{children}</StyledCenteredContent>;
};

export default CenteredContent;
