import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DefaultText from 'components/atoms/DefaultText';
import Header from 'components/templates/Header';
import CenteredContent from 'components/templates/CenteredContent';
import AppContext from 'core/AppContext';
import DetailedInfo from 'components/molecules/DetailedInfo';

const CharacterInfo = () => {
  const { id } = useParams();
  const { characters } = useContext(AppContext);
  const currentCharacter = characters.find((item) => {
    return item.id === Number(id);
  });

  const currentComponent = currentCharacter ? (
    <DetailedInfo character={currentCharacter} />
  ) : (
    <DefaultText>There is no info</DefaultText>
  );

  return (
    <>
      <Header />
      <CenteredContent>{currentComponent}</CenteredContent>
    </>
  );
};

export default CharacterInfo;
