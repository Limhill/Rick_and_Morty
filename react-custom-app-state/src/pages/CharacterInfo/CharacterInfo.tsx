import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/templates/Header';
import CenteredContent from 'components/atoms/CenteredContent';
import AppContext from 'core/AppContext';
import CharacterInformation from 'components/molecules/CharacterInformation';
import { Pages } from 'core/enums';
import Link from 'components/atoms/Link';
import { Character } from 'core/interfaces/others';

const StyledLink = styled(Link)`
  margin-left: 2rem;
`;

const CharacterInfo = () => {
  const { id } = useParams();
  const { characters } = useContext(AppContext);
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
