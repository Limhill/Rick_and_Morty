import React from 'react';
import { Link } from 'react-router-dom';
import { Pages } from 'core/enums';
import { characters } from '__mocks__/characters';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Main page</h1>
      <SearchBar />
      <div className={styles.cards} data-testid="cards">
        {characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            origin={character.origin}
            location={character.location}
            image={character.image}
          />
        ))}
      </div>
      <nav className={styles.nav}>
        <Link to={Pages.aboutUs} className={styles.nav__link}>
          About us
        </Link>
      </nav>
    </div>
  );
};

export default Main;
