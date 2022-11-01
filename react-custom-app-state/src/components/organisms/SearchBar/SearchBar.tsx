import React, { FormEvent, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { placeholder, searchRequest } from 'core/constants';
import icon from 'assets/icons/search.svg';
import TextInput from 'components/atoms/TextInput';
import { Color, LoadingStatus } from 'core/enums';
import { getFilteredCharacters } from 'services/axios';
import AppContext from 'core/AppContext';
import { splitArrayOnChunks } from 'services/helpers';

const StyledSearchBar = styled(TextInput)`
  border-radius: 3rem;
  background: 1rem 0.7rem url(${icon}) no-repeat;
  padding: 0.7rem 0 0.7rem 5rem;
  &::placeholder {
    color: ${Color.white};
    opacity: 0.8;
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }
`;

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchBar = () => {
  const { searchBy, resultsPerPage, searchBarValue, changeContext } = useContext(AppContext);
  const input = useRef(searchBarValue);

  const requestCharacters = async () => {
    changeContext({ loadingStatus: LoadingStatus.loading });
    const response = await getFilteredCharacters(searchBarValue, searchBy);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeContext({ searchBarValue: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await requestCharacters();
  };

  useEffect(() => {
    input.current = searchBarValue;
  }, [searchBarValue]);

  useEffect(() => {
    const inputValue = localStorage.getItem(searchRequest);
    if (inputValue) {
      changeContext({ searchBarValue: inputValue });
    }
    return () => {
      localStorage.setItem(searchRequest, input.current);
    };
  }, [changeContext]);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <StyledSearchBar onChange={handleChange} placeholder={placeholder} value={searchBarValue} />
    </Wrapper>
  );
};

export default SearchBar;
