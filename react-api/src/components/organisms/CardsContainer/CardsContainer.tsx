import styled from 'styled-components';

const CardsContainer = styled.section`
  padding-top: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2rem;
`;

export default CardsContainer;
