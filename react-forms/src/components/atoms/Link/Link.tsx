import { Link as defaultLink } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { LinkProps } from 'core/interfaces/props';

export const Link = styled(defaultLink).attrs(({ marginTop }: LinkProps) => ({
  marginTop: `${marginTop}rem` || '0',
}))`
  color: ${Color.lightBlue};
  text-decoration: none;
  position: relative;
  font-size: 24px;
  margin-top: ${({ marginTop }) => marginTop};
  &::after {
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    height: 0.3rem;
    content: '';
    transition: width 0.3s ease-in-out;
    background: ${Color.lightGreen};
  }
  &:hover:after,
  &:focus:after {
    width: 100%;
  }
`;
