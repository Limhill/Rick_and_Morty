import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { placeholder, searchBarValue } from 'core/constants';
import icon from 'assets/icons/search.svg';
import TextInput from 'components/atoms/TextInput';
import { Color, LoadingStatus } from 'core/enums';
import { getFilteredCharacters } from 'services/axios';
import { SearchBarProps } from 'core/interfaces/props';
import AppContext from 'core/AppContext';

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

const SearchBar = ({ handler }: SearchBarProps) => {
  const context = useContext(AppContext);
  const [state, setState] = useState(localStorage.getItem(searchBarValue) || '');
  const input = useRef(state);

  const requestCharacters = async () => {
    context.changeStatus(LoadingStatus.loading);
    const response = await getFilteredCharacters(state);
    if (typeof response !== 'string') {
      handler(response);
      context.changeStatus(LoadingStatus.success);
    } else {
      context.changeStatus(LoadingStatus.error);
    }
  };

  useEffect(() => {
    input.current = state;
  }, [state]);

  useEffect(() => {
    const inputValue = localStorage.getItem(searchBarValue);
    if (inputValue) {
      requestCharacters().then(/* do nothing */);
      setState(inputValue);
    }
    return () => {
      localStorage.setItem(searchBarValue, input.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await requestCharacters();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <StyledSearchBar onChange={handleChange} placeholder={placeholder} value={state} />
    </Wrapper>
  );
};

export default SearchBar;