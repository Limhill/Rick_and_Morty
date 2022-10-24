import React from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import { CloseIconProps } from 'core/interfaces/props';

const StyledCloseIcon = styled.svg`
  position: absolute;
  top: 1rem;
  right: 1rem;
  fill: ${Color.red};

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 2px ${Color.red});
  }
`;

function CloseIcon({ handler }: CloseIconProps) {
  return (
    <StyledCloseIcon
      onClick={handler}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <path
        onClick={handler}
        d="M7 4a.995.995 0 00-.707.293l-2 2a.999.999 0 000 1.414L11.586 15l-7.293 7.293a.999.999 0 000 1.414l2 2a.999.999 0 001.414 0L15 18.414l7.293 7.293a.999.999 0 001.414 0l2-2a.999.999 0 000-1.414L18.414 15l7.293-7.293a.999.999 0 000-1.414l-2-2a.999.999 0 00-1.414 0L15 11.586 7.707 4.293A.996.996 0 007 4z"
      ></path>
    </StyledCloseIcon>
  );
}

export default CloseIcon;
