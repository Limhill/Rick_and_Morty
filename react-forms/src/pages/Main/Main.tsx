import React from 'react';
import { Pages } from 'core/enums';
import { characters } from '__mocks__/characters';
import MainPageTitle from 'components/atoms/MainPageTitle';
import Content from 'components/templates/Content/Content';
import SearchBar from 'components/atoms/SearchBar';
import Card from 'components/organisms/Card';
import CardsContainer from 'components/organisms/CardsContainer';
import Link from 'components/atoms/Link';
import Navigation from 'components/molecules/Navigation';

const Main = () => {
  return (
    <Content>
      <MainPageTitle>Main page</MainPageTitle>
      <SearchBar />
      <CardsContainer data-testid="cards">
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
      </CardsContainer>
      <Navigation>
        <Link to={Pages.aboutUs}>About us</Link>
      </Navigation>
    </Content>
  );
};

export default Main;
