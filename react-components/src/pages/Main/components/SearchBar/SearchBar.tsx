import React from 'react';
import { SearchBarState } from 'core/interfaces';
import { placeholder, searchBarValue } from 'core/constants';
import styles from './SearchBar.module.scss';

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
      <input
        className={styles.searchBar}
        type="text"
        onChange={this.handleChange}
        value={this.state.value}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBar;
