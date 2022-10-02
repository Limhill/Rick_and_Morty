import React from 'react';
import styled from 'styled-components';
import { ParentProps } from 'core/interfaces/props';

const StyledCardInfoItem = styled.li`
  margin-bottom: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const CardInfoItem = ({ children }: ParentProps) => {
  return <StyledCardInfoItem>{children}</StyledCardInfoItem>;
};

export default CardInfoItem;
