import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

const StyledButton = styled.button`
  border-radius: 20rem;
  border: 2px solid ${Color.lightBlue};
  font-size: 2.5rem;
  width: 5.5rem;
  height: 5.5rem;
  cursor: pointer;
  color: ${Color.white};
  background: transparent;
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }
`;

const Pagination = () => {
  return (
    <Container>
      <StyledButton>1</StyledButton>
      <StyledButton>2</StyledButton>
      <StyledButton>3</StyledButton>
      <StyledButton>4</StyledButton>
      <StyledButton>50</StyledButton>
    </Container>
  );
};

export default Pagination;
