import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { UserCardProps } from 'core/interfaces/props';
import { capitalize } from 'services/helpers';

const StyledCardInfo = styled.ul`
  list-style: none;
  padding: 0 3rem;
  color: ${Color.black};
`;

const CardInfoItem = styled.li`
  margin-bottom: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const CardInfo = (props: UserCardProps) => {
  const items = {
    name: props.name,
    birthday: props.birthday,
    status: props.status,
    species: props.species ? 'Human' : 'Non-human',
    gender: props.gender ? 'Female' : 'Male',
  };

  return (
    <StyledCardInfo>
      {Object.keys(items).map((item) => {
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
