import styled from 'styled-components';

const CardImage = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))`
  width: 100%;
  height: 100%;
  border-radius: 0 0 2.5rem 2.5rem;
`;

export default CardImage;
