import React from 'react';
import styled from 'styled-components';
import PageTitle from 'components/atoms/PageTitle';
import Content from 'components/templates/Content';
import SearchBar from 'components/organisms/SearchBar';
import CardsContainer from 'components/organisms/CardsContainer';
import Header from 'components/templates/Header';
import { MainPageState } from 'core/interfaces/states';
import { Character, ModalCharacterInfo } from 'core/interfaces/others';
import OneSideCard from 'components/organisms/OneSideCard';
import Modal from 'components/organisms/Modal';
import { CharacterGender, CharacterStatus, LoadingStatus } from 'core/enums';
import AppContext from 'core/AppContext';
import DefaultText from 'components/atoms/DefaultText/DefaultText';

const StyledDefaultText = styled(DefaultText)`
  padding-top: 4rem;
`;

const initialModalState = {
  modalIsOpen: false,
  modal: {
    name: '',
    status: CharacterStatus.unknown,
    species: '',
    type: '',
    gender: CharacterGender.unknown,
    origin: { name: '', url: '' },
    created: '',
    image: '',
    location: { name: '', url: '' },
  },
};

class Main extends React.Component<unknown, MainPageState> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext> = this.context;

  constructor(props: Main) {
    super(props);
    this.state = {
      characters: [],
      ...initialModalState,
    };
  }

  createCards = (characters: Character[]) => {
    this.setState({ characters });
  };

  openModalWindow = ({
    name,
    status,
    gender,
    type,
    species,
    image,
    created,
    origin,
    location,
  }: ModalCharacterInfo) => {
    this.setState({
      modalIsOpen: true,
      modal: { name, status, gender, type, species, image, created, origin, location },
    });
  };

  closeModalWindow = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      this.setState(initialModalState);
    }
  };

  render() {
    return (
      <>
        <Header />
        <Content>
          <PageTitle>Main page</PageTitle>
          <SearchBar handler={this.createCards} />
          {this.context.loadingStatus === LoadingStatus.success && (
            <CardsContainer data-testid="cards">
              {this.state.characters.map((character) => (
                <OneSideCard
                  handler={this.openModalWindow}
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  gender={character.gender}
                  type={character.type}
                  species={character.species}
                  created={character.created}
                  location={character.location}
                  origin={character.origin}
                  image={character.image}
                />
              ))}
            </CardsContainer>
          )}
          {this.context.loadingStatus === LoadingStatus.loading && (
            <StyledDefaultText>Loading</StyledDefaultText>
          )}
          {this.context.loadingStatus === LoadingStatus.error && (
            <StyledDefaultText>There are no results</StyledDefaultText>
          )}
        </Content>
        <Modal
          isOpen={this.state.modalIsOpen}
          handler={this.closeModalWindow}
          name={this.state.modal.name}
          status={this.state.modal.status}
          gender={this.state.modal.gender}
          type={this.state.modal.type}
          species={this.state.modal.species}
          created={this.state.modal.created}
          location={this.state.modal.location}
          origin={this.state.modal.origin}
          image={this.state.modal.image}
        />
      </>
    );
  }
}

export default Main;
