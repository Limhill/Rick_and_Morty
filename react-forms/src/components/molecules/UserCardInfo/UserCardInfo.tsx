import React from 'react';
import styled from 'styled-components';
import { UserCardProps } from 'core/interfaces/props';
import { Color } from 'core/enums';
import CardInfoItem from 'components/atoms/CardInfoItem';
import { capitalize } from 'services/helpers';

const StyledCardInfo = styled.ul`
  list-style: none;
  padding: 0 3rem;
  color: ${Color.black};
`;

const UserCardInfo = ({ name, birthday, status, species, gender }: UserCardProps) => {
  const items = {
    name,
    birthday,
    status,
    species: species ? 'human' : 'non-human',
    gender: gender ? 'female' : 'male',
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

export default UserCardInfo;
