import React from 'react';
import PageTitle from 'components/atoms/PageTitle';
import Content from 'components/templates/Content';
import SearchBar from 'components/atoms/SearchBar';
import CardsContainer from 'components/organisms/CardsContainer';
import Header from 'components/templates/Header';
import { MainPageState } from 'core/interfaces/states';
import { Character } from 'core/interfaces/others';
import OneSideCard from 'components/organisms/OneSideCard';
import Modal from 'components/organisms/Modal';

class Main extends React.Component<unknown, MainPageState> {
  constructor(props: Main) {
    super(props);
    this.state = { characters: [], modalIsOpen: false };
  }

  createCards = (characters: Character[]) => {
    this.setState({ characters });
  };

  changeModalState = () => {
    const currentState = this.state.modalIsOpen;
    this.setState({ modalIsOpen: !currentState });
  };

  render() {
    return (
      <>
        <Header />
        <Content>
          <PageTitle>Main page</PageTitle>
          <SearchBar handler={this.createCards} />
          <CardsContainer handler={this.changeModalState} data-testid="cards">
            {this.state.characters.map((character) => (
              <OneSideCard key={character.id} name={character.name} image={character.image} />
            ))}
          </CardsContainer>
        </Content>
        <Modal isOpen={this.state.modalIsOpen} handler={this.changeModalState} />
      </>
    );
  }
}

export default Main;
