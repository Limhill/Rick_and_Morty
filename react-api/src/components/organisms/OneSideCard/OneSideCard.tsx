import React from 'react';
import { OneSideCardProps } from 'core/interfaces/props';
import CardTitle from 'components/atoms/CardTitle';
import CardImage from 'components/atoms/CardImage';
import CardSide from 'components/molecules/CardSide';
import CardWrapper from 'components/atoms/CardWrapper';

const OneSideCard = ({
  name,
  image,
  status,
  gender,
  type,
  species,
  origin,
  created,
  location,
  handler,
}: OneSideCardProps) => {
  return (
    <CardWrapper
      onClick={() => {
        handler({ name, image, status, gender, type, species, origin, created, location });
      }}
      data-testid="card"
    >
      <CardSide>
        <CardTitle>{name}</CardTitle>
        <CardImage src={image} alt={name} />
      </CardSide>
    </CardWrapper>
  );
};

export default OneSideCard;
