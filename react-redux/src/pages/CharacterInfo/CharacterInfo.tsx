import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/templates/Header';
import CenteredContent from 'components/atoms/CenteredContent';
import CharacterInformation from 'components/molecules/CharacterInformation';
import { Pages } from 'core/enums';
import Link from 'components/atoms/Link';
import { Character } from 'core/interfaces/others';
import { useAppSelector } from 'app/hooks';

const StyledLink = styled(Link)`
  margin-left: 2rem;
`;

const CharacterInfo = () => {
  const { id } = useParams();
  const { characters } = useAppSelector((state) => state.app);
  const currentCharacter = characters.find((item) => {
    return item.id === Number(id);
  });

  return currentCharacter ? (
    <>
      <Header />
      <StyledLink to={Pages.main}>Go back</StyledLink>
      <CenteredContent>
        <CharacterInformation character={currentCharacter as Character} />
      </CenteredContent>
    </>
  ) : (
    <Navigate to={Pages.main} replace />
  );
};

export default CharacterInfo;
