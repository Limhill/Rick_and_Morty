import React, { FormEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { placeholder, searchRequest } from 'core/constants';
import icon from 'assets/icons/search.svg';
import TextInput from 'components/atoms/TextInput';
import { Color } from 'core/enums';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { changeSearchBarValue, getCharacters } from 'features/appSlice';

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
  const { searchBy, searchBarValue } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const input = useRef(searchBarValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchBarValue(e.target.value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getCharacters({ searchBarValue, searchBy }));
  };

  useEffect(() => {
    input.current = searchBarValue;
  }, [searchBarValue]);

  useEffect(() => {
    const inputValue = localStorage.getItem(searchRequest);
    if (inputValue) {
      dispatch(changeSearchBarValue(inputValue));
    }
    return () => {
      localStorage.setItem(searchRequest, input.current);
    };
  }, [dispatch]);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <StyledSearchBar onChange={handleChange} placeholder={placeholder} value={searchBarValue} />
    </Wrapper>
  );
};

export default SearchBar;
