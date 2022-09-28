import React from 'react';
import { SearchBarState } from 'core/interfaces';
import styles from './SearchBar.module.scss';
import { placeholder, searchBarValue } from 'core/constants';

class SearchBar extends React.Component<unknown, SearchBarState> {
  constructor(props: unknown) {
    super(props);

    if (localStorage.getItem(searchBarValue)) {
      this.state = { value: localStorage.getItem(searchBarValue) as string };
    } else {
      this.state = { value: '' };
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

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
