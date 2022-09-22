import React from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import { Link } from 'react-router-dom';
import { Pages, CharacterStatus, CharacterGender } from 'core/enums';
import Card from './components/Card';
import { characters } from 'mock-data/characters';

const Main = () => {
  return (
    <main className="main">
      <div className="content">
        <h1 className="title">Main page</h1>
        <SearchBar />
        <div className="cards">
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status as CharacterStatus}
              species={character.species}
              type={character.type}
              gender={character.gender as CharacterGender}
              origin={character.origin}
              location={character.location}
              image={character.image}
            />
          ))}
        </div>
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
