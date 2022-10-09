import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { CardProps, UserCardProps } from 'core/interfaces/props';
import { capitalize, isCardProps, isCharacterInfo } from 'services/helpers';
import CardInfoItem from 'components/atoms/CardInfoItem';
import { CharacterInfo, UserInfo } from 'core/interfaces/others';

const StyledCardInfo = styled.ul`
  list-style: none;
  padding: 0 3rem;
  color: ${Color.black};
`;

const CardInfo = (props: CardProps | UserCardProps) => {
  let items: CharacterInfo | UserInfo;
  if (isCardProps(props)) {
    items = {
      name: props.name,
      status: props.status,
      species: props.species,
      type: props.type,
      gender: props.gender,
      origin: props.origin.name,
      location: props.location.name,
    };
  } else {
    items = {
      name: props.name,
      birthday: props.birthday,
      status: props.status,
      species: props.species ? 'Human' : 'Non-human',
      gender: props.gender ? 'Female' : 'Male',
    };
  }

  return (
    <StyledCardInfo>
      {Object.keys(items).map((item) => {
        if (isCharacterInfo(items) && item === 'type' && !items[item]) return;
        return (
          <CardInfoItem key={item}>
            <span>
              <b>{`${capitalize(item)}:`}</b> {items[item as keyof typeof items]}
            </span>
          </CardInfoItem>
        );
      })}
    </StyledCardInfo>
  );
};

export default CardInfo;
