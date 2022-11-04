import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageTitle from 'components/atoms/PageTitle';
import Content from 'components/atoms/Content';
import SearchBar from 'components/organisms/SearchBar';
import CardsContainer from 'components/atoms/CardsContainer';
import Header from 'components/templates/Header';
import OneSideCard from 'components/molecules/OneSideCard';
import { LoadingStatus } from 'core/enums';
import DefaultText from 'components/atoms/DefaultText';
import SearchParameters from 'components/organisms/SearchParameters';
import Pagination from 'components/organisms/Pagination';
import { useAppSelector } from 'app/hooks';

const StyledDefaultText = styled(DefaultText)`
  padding-top: 4rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Main = () => {
  const { loadingStatus, currentPage, pages } = useAppSelector((state) => state.app);

  return (
    <>
      <Header />
      <Content>
        <PageTitle>Main page</PageTitle>
        <SearchBar />
        <SearchParameters />
        {loadingStatus === LoadingStatus.success && (
          <>
            <CardsContainer data-testid="cards">
              {pages[currentPage - 1].map((character) => (
                <StyledLink key={character.id} to={`/${character.id}`}>
                  <OneSideCard
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
                </StyledLink>
              ))}
            </CardsContainer>
            <Pagination />
          </>
        )}
        {loadingStatus === LoadingStatus.loading && <StyledDefaultText>Loading</StyledDefaultText>}
        {loadingStatus === LoadingStatus.error && (
          <StyledDefaultText>There are no results</StyledDefaultText>
        )}
      </Content>
    </>
  );
};

export default Main;
