import React from 'react';
import styled from 'styled-components';
import { CardsContainerProps } from 'core/interfaces/props';

const StyledCardsContainer = styled.section`
  padding-top: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2rem;
`;

const CardsContainer = ({ handler, children }: CardsContainerProps) => {
  return <StyledCardsContainer onClick={handler}>{children}</StyledCardsContainer>;
};

export default CardsContainer;
