import React from 'react';
import SearchBar from './components/SearchBar';
import { Link } from 'react-router-dom';
import { Pages, CharacterStatus, CharacterGender } from 'core/enums';
import Card from './components/Card';
import { characters } from 'mock-data/characters';
import { v4 as uuidv4 } from 'uuid';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Main page</h1>
        <SearchBar />
        <div className={styles.cards}>
          {characters.map((character) => (
            <Card
              key={uuidv4()}
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
        <nav className={styles.nav}>
          <Link to={Pages.aboutUs} className={styles.nav__link}>
            About us
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default Main;
