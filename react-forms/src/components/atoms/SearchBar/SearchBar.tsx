import React from 'react';
import styled from 'styled-components';
import { SearchBarState } from 'core/interfaces/states';
import { placeholder, searchBarValue } from 'core/constants';
import icon from 'assets/icons/search.svg';
import { Color } from 'core/enums';

const StyledSearchBar = styled.input`
  border-radius: 3rem;
  min-height: 3rem;
  background: 1rem 0.8rem url(${icon}) no-repeat;
  padding: 0.7rem 0 0.7rem 5rem;
  outline: none;
  font-size: 2.4rem;
  font-family: Roboto, sans-serif;
  border: 0.3rem solid ${Color.lightBlue};
  color: ${Color.white};
  min-width: 50%;
  &::placeholder {
    color: ${Color.white};
    opacity: 0.9;
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }
`;

class SearchBar extends React.Component<unknown, SearchBarState> {
  constructor(props: unknown) {
    super(props);
    this.state = { value: localStorage.getItem(searchBarValue) || '' };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  componentWillUnmount() {
    localStorage.setItem(searchBarValue, this.state.value);
  }

  render() {
    return (
      <StyledSearchBar
        onChange={this.handleChange}
        value={this.state.value}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBar;
