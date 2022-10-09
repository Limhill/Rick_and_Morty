import React from 'react';
import styled from 'styled-components';
import { CardProps, UserCardProps } from 'core/interfaces/props';
import CharacterCardInfo from 'components/molecules/CharacaterCardInfo';
import CardSide from 'components/molecules/CardSide/CardSide';
import CardTitle from 'components/atoms/CardTitle/CardTitle';
import CardImage from 'components/atoms/CardImage';
import { Color } from 'core/enums';
import { isCardProps } from 'services/helpers';
import UserCardInfo from '../../molecules/UserCardInfo';

const CardContainer = styled.div`
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
  ${CardContainer}:hover & {
    transform: rotateY(180deg);
    box-shadow: 0 0 15px 10px ${Color.cardHighlight};
  }
`;

const Card = (data: CardProps | UserCardProps) => {
  return (
    <CardContainer data-testid="card">
      <StyledCard>
        <CardSide>
          <CardTitle>{data.name}</CardTitle>
          <CardImage
            src={isCardProps(data) ? data.image : URL.createObjectURL(data.image)}
            alt={data.name}
          />
        </CardSide>
        <CardSide isBackSide={true}>
          {isCardProps(data) && (
            <CharacterCardInfo
              id={data.id}
              name={data.name}
              status={data.status}
              species={data.species}
              type={data.type}
              gender={data.gender}
              origin={data.origin}
              location={data.location}
              image={data.image}
            />
          )}
          {!isCardProps(data) && (
            <UserCardInfo
              name={data.name}
              birthday={data.birthday}
              status={data.status}
              species={data.species}
              gender={data.gender}
              image={data.image}
            />
          )}
        </CardSide>
      </StyledCard>
    </CardContainer>
  );
};

export default Card;
