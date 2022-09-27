import React from 'react';
import { SearchBarState } from 'core/interfaces';
import styles from './SearchBar.module.scss';
import { localStorageKey } from 'core/enums';

class SearchBar extends React.Component<unknown, SearchBarState> {
  constructor(props: unknown) {
    super(props);
    const value = localStorage.getItem(localStorageKey.value)
      ? (localStorage.getItem(localStorageKey.value) as string)
      : '';
    this.state = { value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  componentDidMount() {
    const value = localStorage.getItem(localStorageKey.value);
    if (value) {
      this.setState({ value });
    } else {
      this.setState({ value: '' });
    }
  }

  componentWillUnmount() {
    localStorage.setItem(localStorageKey.value, this.state.value);
  }

  render() {
    return (
      <input
        data-testid="search-bar"
        className={styles.searchBar}
        type="text"
        onChange={this.handleChange}
        value={this.state.value}
        placeholder="Введите поисковый запрос"
      />
    );
  }
}

export default SearchBar;
