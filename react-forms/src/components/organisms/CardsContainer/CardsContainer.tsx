import React from 'react';
import styled from 'styled-components';
import { ParentProps } from 'core/interfaces/props';

const StyledCardsContainer = styled.section`
  padding-top: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2rem;
`;

const CardsContainer = ({ children }: ParentProps) => {
  return <StyledCardsContainer>{children}</StyledCardsContainer>;
};

export default CardsContainer;
