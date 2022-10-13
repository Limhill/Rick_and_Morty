import React from 'react';
import { OneSideCardProps } from 'core/interfaces/props';
import CardTitle from 'components/atoms/CardTitle';
import CardImage from 'components/atoms/CardImage';
import CardSide from 'components/molecules/CardSide';
import CardWrapper from 'components/atoms/CardWrapper';

const OneSideCard = ({ name, image }: OneSideCardProps) => {
  return (
    <CardWrapper>
      <CardSide>
        <CardTitle>{name}</CardTitle>
        <CardImage src={image} />
      </CardSide>
    </CardWrapper>
  );
};

export default OneSideCard;
