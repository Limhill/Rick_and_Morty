import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { CardSideProps } from 'core/interfaces';

const StyledCardSide = styled.div<CardSideProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: ${Color.cardBackground};
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ back }) => (back ? 'rotateY(180deg)' : 'none')};
`;

const CardSide = ({ back, children }: CardSideProps) => {
  return <StyledCardSide back={back}>{children}</StyledCardSide>;
};

export default CardSide;
