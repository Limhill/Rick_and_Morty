import React, { createRef, FormEvent, RefObject } from 'react';
import styled from 'styled-components';
import { SearchBarState } from 'core/interfaces/states';
import { placeholder, searchBarValue } from 'core/constants';
import icon from 'assets/icons/search.svg';
import TextInput from 'components/atoms/TextInput';
import { Color, LoadingStatus } from 'core/enums';
import { getFilteredCharacters } from 'services';
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

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  input: RefObject<HTMLInputElement>;
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext> = this.context;

  constructor(props: SearchBarProps) {
    super(props);
    this.state = { value: localStorage.getItem(searchBarValue) || '' };
    this.input = createRef();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  componentWillUnmount() {
    localStorage.setItem(searchBarValue, this.state.value);
  }

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    this.context.changeStatus(LoadingStatus.loading);
    if (this.input.current) {
      const response = await getFilteredCharacters(this.input.current.value);
      if (response) {
        this.props.handler(response);
        this.context.changeStatus(LoadingStatus.success);
      } else {
        this.context.changeStatus(LoadingStatus.error);
      }
    }
  };

  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <StyledSearchBar
          onChange={this.handleChange}
          value={this.state.value}
          placeholder={placeholder}
          ref={this.input}
        />
      </Wrapper>
    );
  }
}

export default SearchBar;
