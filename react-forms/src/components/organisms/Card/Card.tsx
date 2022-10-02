import React from 'react';
import styled from 'styled-components';
import { CardProps } from 'core/interfaces/props';
import CardInfo from 'components/molecules/CardInfo/CardInfo';
import CardSide from 'components/molecules/CardSide/CardSide';
import CardTitle from 'components/atoms/CardTitle/CardTitle';
import CardImage from 'components/atoms/CardImage';
import { Color } from 'core/enums';

const StyledCardContainer = styled.div`
  perspective: 100rem;
  background-color: transparent;
  width: 30rem;
  height: 37.2rem;
  cursor: pointer;
`;

const StyledCard = styled.div`
  background: ${Color.white};
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 2.5rem;
  ${StyledCardContainer}:hover & {
    transform: rotateY(180deg);
    box-shadow: 0 0 15px 10px ${Color.cardHighlight};
  }
`;

const Card = ({ id, name, status, species, type, gender, origin, location, image }: CardProps) => {
  return (
    <StyledCardContainer data-testid="card">
      <StyledCard>
        <CardSide>
          <CardTitle>{name}</CardTitle>
          <CardImage src={image} alt={name} />
        </CardSide>
        <CardSide isBackSide={true}>
          <CardInfo
            id={id}
            name={name}
            status={status}
            species={species}
            type={type}
            gender={gender}
            origin={origin}
            location={location}
            image={image}
          />
        </CardSide>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default Card;
