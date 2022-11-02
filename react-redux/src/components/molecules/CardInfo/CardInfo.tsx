import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { DoubleSideCardProps } from 'core/interfaces/props';
import { capitalize } from 'services/helpers';
import ListItem from 'components/atoms/ListItem';

const StyledCardInfo = styled.ul`
  list-style: none;
  padding: 0 3rem;
  color: ${Color.black};
`;

const CardInfo = ({ name, birthday, status, species, gender }: DoubleSideCardProps) => {
  const items = {
    name,
    birthday,
    status,
    species: species ? 'Human' : 'Non-human',
    gender: gender ? 'Female' : 'Male',
  };

  return (
    <StyledCardInfo>
      {Object.keys(items).map((item) => {
        return (
          <ListItem key={item}>
            <span>
              <b>{`${capitalize(item)}:`}</b> {items[item as keyof typeof items]}
            </span>
          </ListItem>
        );
      })}
    </StyledCardInfo>
  );
};

export default CardInfo;
