import React, { useContext, useState } from 'react';
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
import DefaultText from 'components/atoms/DefaultText';
import Select from '../../components/molecules/Select';

const StyledDefaultText = styled(DefaultText)`
  padding-top: 4rem;
`;

const SearchParametersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

const Main = () => {
  const context = useContext(AppContext);

  const [state, setState] = useState<MainPageState>({ characters: [], ...initialModalState });

  const createCards = (characters: Character[]) => {
    setState((prevState) => ({ ...prevState, characters }));
  };

  const openModalWindow = ({
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
    setState((prevState) => ({
      ...prevState,
      modalIsOpen: true,
      modal: { name, status, gender, type, species, image, created, origin, location },
    }));
  };

  const closeModalWindow = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setState((prevState) => ({
        ...prevState,
        ...initialModalState,
      }));
    }
  };

  return (
    <>
      <Header />
      <Content>
        <PageTitle>Main page</PageTitle>
        <SearchBar handler={createCards} />
        {context.loadingStatus === LoadingStatus.success && (
          <>
            <SearchParametersContainer>
              <Select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
              <Select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </SearchParametersContainer>
            <CardsContainer data-testid="cards">
              {state.characters.map((character) => (
                <OneSideCard
                  handler={openModalWindow}
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
          </>
        )}
        {context.loadingStatus === LoadingStatus.loading && (
          <StyledDefaultText>Loading</StyledDefaultText>
        )}
        {context.loadingStatus === LoadingStatus.error && (
          <StyledDefaultText>There are no results</StyledDefaultText>
        )}
      </Content>
      <Modal
        isOpen={state.modalIsOpen}
        handler={closeModalWindow}
        name={state.modal.name}
        status={state.modal.status}
        gender={state.modal.gender}
        type={state.modal.type}
        species={state.modal.species}
        created={state.modal.created}
        location={state.modal.location}
        origin={state.modal.origin}
        image={state.modal.image}
      />
    </>
  );
};

export default Main;
