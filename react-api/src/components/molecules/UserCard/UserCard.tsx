import React from 'react';
import styled from 'styled-components';
import { UserCardProps } from 'core/interfaces/props';
import { Color } from 'core/enums';

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: none;
  color: ${Color.white};
`;

const UserCard = ({ name, birthday, status, species, gender, image }: UserCardProps) => {
  return (
    <Card>
      <img src={URL.createObjectURL(image)} alt={name} />
      <List>
        <li>{name}</li>
        <li>{birthday}</li>
        <li>{status}</li>
        <li>{species ? 'human' : 'non-human'}</li>
        <li>{gender ? 'female' : 'male'}</li>
      </List>
    </Card>
  );
};

export default UserCard;
