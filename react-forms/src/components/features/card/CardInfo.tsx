import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { CardProps } from 'core/interfaces';
import { capitalize } from 'services/helpers';

const StyledCardInfo = styled.ul`
  list-style: none;
  padding: 0 3rem;
  color: ${Color.black};
`;

const StyledCardInfoItem = styled.li`
  margin-bottom: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const CardInfo = ({ name, status, species, type, gender, origin, location }: CardProps) => {
  const items = {
    name,
    status,
    species,
    type,
    gender,
    origin: origin.name,
    location: location.name,
  };
  return (
    <StyledCardInfo>
      {Object.keys(items).map((item) => {
        if (item === 'type' && !items[item]) return;
        return (
          <StyledCardInfoItem key={item}>
            <span>
              <b>{`${capitalize(item)}:`}</b> {items[item as keyof typeof items]}
            </span>
          </StyledCardInfoItem>
        );
      })}
    </StyledCardInfo>
  );
};

export default CardInfo;
