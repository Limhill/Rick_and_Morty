import React from 'react';
import styled from 'styled-components';
import { SearchBarState } from 'core/interfaces/states';
import { placeholder, searchBarValue } from 'core/constants';
import icon from 'assets/icons/search.svg';
import TextInput from 'components/atoms/TextInput';
import { Color } from 'core/enums';

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
