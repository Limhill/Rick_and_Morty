import React from 'react';
import { SearchBarState } from 'core/interfaces';
import styles from './SearchBar.module.scss';

class SearchBar extends React.Component<unknown, SearchBarState> {
  constructor(props: unknown) {
    super(props);
    const value = localStorage.getItem('value') ? (localStorage.getItem('value') as string) : '';
    this.state = { value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  componentDidMount() {
    const value = localStorage.getItem('value');
    if (value) {
      this.setState({ value });
    } else {
      this.setState({ value: '' });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
  }

  render() {
    return (
      <input
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
