import React from 'react';
import styled from 'styled-components';
import { CardSideProps, UserCardProps } from 'core/interfaces/props';
import CardInfo from 'components/molecules/CardInfo';
import CardSide from 'components/molecules/CardSide/CardSide';
import CardTitle from 'components/atoms/CardTitle/CardTitle';
import CardImage from 'components/atoms/CardImage';
import { Color } from 'core/enums';
import CardWrapper from 'components/atoms/CardWrapper';

const StyledCardWrapper = styled(CardWrapper)`
  perspective: 100rem;
  background-color: transparent;
`;

const StyledCard = styled.div`
  cursor: pointer;
  background: ${Color.white};
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 2.5rem;
  ${StyledCardWrapper}:hover & {
    transform: rotateY(180deg);
    box-shadow: 0 0 15px 10px ${Color.cardHighlight}};
  }
`;

const StyledCardSide = styled(CardSide)<CardSideProps>`
  position: absolute;
  backface-visibility: hidden;
  transform: ${({ isBackSide }) => (isBackSide ? 'rotateY(180deg)' : 'none')};
`;

const TwoSideCard = ({ name, birthday, status, species, gender, image }: UserCardProps) => {
  return (
    <StyledCardWrapper data-testid="card">
      <StyledCard>
        <StyledCardSide>
          <CardTitle>{name}</CardTitle>
          <CardImage src={URL.createObjectURL(image)} alt={name} />
        </StyledCardSide>
        <StyledCardSide isBackSide={true}>
          <CardInfo
            name={name}
            birthday={birthday}
            status={status}
            species={species}
            gender={gender}
            image={image}
          />
        </StyledCardSide>
      </StyledCard>
    </StyledCardWrapper>
  );
};

export default TwoSideCard;
