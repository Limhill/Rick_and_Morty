import React from 'react';
import styled from 'styled-components';
import Label from 'components/atoms/Label';
import Select from 'components/atoms/Select';
import { SearchBy } from 'core/enums';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { changeResultsPerPage, changeSearchBy, getCharacters } from 'features/appSlice';

const SearchParametersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledOption = styled.option`
  color: black;
`;

const StyledLabel = styled(Label)`
  font-size: 2.5rem;
  padding-right: 0.5rem;
`;

const SearchParameters = () => {
  const { resultsPerPage, searchBy, searchBarValue } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleSearchByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getCharacters({ searchBarValue, searchBy: e.target.value as SearchBy }));
    dispatch(changeSearchBy(e.target.value as SearchBy));
  };

  const handleResultsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeResultsPerPage(Number(e.target.value)));
  };

  return (
    <SearchParametersContainer>
      <div>
        <StyledLabel htmlFor="sort-by">Sort by:</StyledLabel>
        <Select id="sort-by" padding={0.5} onChange={handleSearchByChange} value={searchBy}>
          <StyledOption value={SearchBy.name}>name</StyledOption>
          <StyledOption value={SearchBy.status}>status</StyledOption>
          <StyledOption value={SearchBy.species}>species</StyledOption>
          <StyledOption value={SearchBy.type}>type</StyledOption>
          <StyledOption value={SearchBy.gender}>gender</StyledOption>
        </Select>
      </div>
      <div>
        <StyledLabel htmlFor="results per page">Results per page:</StyledLabel>
        <Select
          id="results per page"
          padding={0.5}
          onChange={handleResultsPerPageChange}
          value={resultsPerPage}
        >
          <StyledOption value="20">20</StyledOption>
          <StyledOption value="60">60</StyledOption>
          <StyledOption value="100">100</StyledOption>
        </Select>
      </div>
    </SearchParametersContainer>
  );
};

export default SearchParameters;
