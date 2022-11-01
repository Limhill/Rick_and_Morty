import React, { useContext } from 'react';
import styled from 'styled-components';
import { Color } from 'core/enums';
import AppContext from 'core/AppContext';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  padding-top: 2rem;
`;

const StyledButton = styled.button`
  border-radius: 20rem;
  border: 2px solid ${Color.lightBlue};
  font-size: 2.5rem;
  width: 5.5rem;
  height: 5.5rem;
  cursor: pointer;
  color: ${Color.white};
  background: transparent;
  &:hover {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }
  &:disabled {
    box-shadow: none;
    border: 2px solid gray;
    color: lightgray;
    cursor: auto;
  }
`;

const StyledCentralButton = styled(StyledButton)`
  cursor: auto;
`;

const Pagination = () => {
  const { currentPage, changeContext, pages } = useContext(AppContext);
  const increasePageNumber = () => {
    changeContext({ currentPage: currentPage + 1 });
  };
  const decreasePageNumber = () => {
    changeContext({ currentPage: currentPage - 1 });
  };
  const goToTheFirstPage = () => {
    changeContext({ currentPage: 1 });
  };
  const goToTheLastPage = () => {
    changeContext({ currentPage: pages.length });
  };

  return (
    <Container>
      <StyledButton onClick={goToTheFirstPage} disabled={currentPage <= 1}>
        &lt;&lt;
      </StyledButton>
      <StyledButton onClick={decreasePageNumber} disabled={!pages[currentPage - 2]}>
        &lt;
      </StyledButton>
      <StyledCentralButton>{currentPage}</StyledCentralButton>
      <StyledButton onClick={increasePageNumber} disabled={!pages[currentPage]}>
        &gt;
      </StyledButton>
      <StyledButton onClick={goToTheLastPage} disabled={currentPage >= pages.length}>
        &gt;&gt;
      </StyledButton>
    </Container>
  );
};

export default Pagination;
