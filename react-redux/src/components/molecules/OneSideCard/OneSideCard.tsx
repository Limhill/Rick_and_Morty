import React from 'react';
import { OneSideCardProps } from 'core/interfaces/props';
import CardTitle from 'components/atoms/CardTitle';
import CardImage from 'components/atoms/CardImage';
import CardSide from 'components/atoms/CardSide';
import CardWrapper from 'components/atoms/CardWrapper';

const OneSideCard = ({ name, image }: OneSideCardProps) => {
  return (
    <CardWrapper data-testid="card">
      <CardSide>
        <CardTitle>{name}</CardTitle>
        <CardImage src={image} alt={name} />
      </CardSide>
    </CardWrapper>
  );
};

export default OneSideCard;
