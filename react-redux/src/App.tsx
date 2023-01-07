import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CharacterInfo from 'pages/CharacterInfo';
import Main from 'pages/Main';
import AboutUs from 'pages/AboutUs';
import NotFound from 'pages/NotFound';
import { Color, Pages } from 'core/enums';
import backgroundImage from 'assets/images/space.jpg';
import CreateCharacter from 'pages/CreateCharacter';

const AppWrapper = styled.main`
  background-color: ${Color.black};
  background-image: linear-gradient(rgba(9, 9, 9, 0.7), rgba(9, 9, 9, 0.7)), url(${backgroundImage});
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path={Pages.main} element={<Main />} />
        <Route path={Pages.aboutUs} element={<AboutUs />} />
        <Route path={Pages.create} element={<CreateCharacter />} />
        <Route path={Pages.pageNotFound} element={<NotFound />} />
        <Route path={Pages.characterId} element={<CharacterInfo />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
