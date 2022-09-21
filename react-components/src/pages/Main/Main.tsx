import React from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import { Link } from 'react-router-dom';
import { Pages } from 'core/constants';

const Main = () => {
  return (
    <main className="main">
      <div className="content">
        <h1 className="title">Main page</h1>
        <SearchBar />
        <nav className="nav">
          <Link to={Pages.aboutUs} className="nav__link">
            About us
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default Main;
