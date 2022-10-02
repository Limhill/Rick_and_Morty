import React from 'react';
import styled from 'styled-components';

const StyledCardImage = styled.img`
  width: 100%;
  border-radius: 0 0 2.5rem 2.5rem;
`;

const CardImage = ({
  src,
  alt,
}: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return <StyledCardImage src={src} alt={alt} />;
};

export default CardImage;
