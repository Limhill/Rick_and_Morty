import React, { useContext } from 'react';
import styled from 'styled-components';
import Label from 'components/atoms/Label';
import Select from 'components/atoms/Select';
import { LoadingStatus, SearchBy } from 'core/enums';
import AppContext from 'core/AppContext';
import { splitArrayOnChunks } from 'services/helpers';
import { getFilteredCharacters } from 'services/axios';

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
  const { resultsPerPage, searchBy, characters, searchBarValue, changeContext } =
    useContext(AppContext);

  const handleSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    await changeContext({
      loadingStatus: LoadingStatus.loading,
      searchBy: e.target.value as SearchBy,
    });
    const response = await getFilteredCharacters(searchBarValue, e.target.value as SearchBy);
    if (typeof response !== 'string') {
      changeContext({
        loadingStatus: LoadingStatus.success,
        currentPage: 1,
        characters: response,
        pages: splitArrayOnChunks(response, resultsPerPage),
      });
    } else {
      changeContext({ loadingStatus: LoadingStatus.error });
    }
  };

  const changeResultsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeContext({
      resultsPerPage: Number(e.target.value),
      currentPage: 1,
      pages: splitArrayOnChunks(characters, Number(e.target.value)),
    });
  };

  return (
    <SearchParametersContainer>
      <div>
        <StyledLabel htmlFor="sort-by">Sort by:</StyledLabel>
        <Select id="sort-by" padding={0.5} onChange={handleSelect} value={searchBy}>
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
          onChange={changeResultsPerPage}
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