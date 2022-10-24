import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Main from 'pages/Main';
import AboutUs from 'pages/AboutUs';
import NotFound from 'pages/NotFound';
import { Color, LoadingStatus, Pages } from 'core/enums';
import backgroundImage from 'assets/images/space.jpg';
import CreateCharacter from 'pages/CreateCharacter';
import { AppState } from 'core/interfaces/states';
import AppContext from 'core/AppContext';

const AppWrapper = styled.main`
  background-color: ${Color.black};
  background-image: linear-gradient(rgba(9, 9, 9, 0.7), rgba(9, 9, 9, 0.7)), url(${backgroundImage});
  min-height: 100vh;
`;

const App = () => {
  const changeStatus = (newStatus: LoadingStatus) => {
    setState(() => ({
      loadingStatus: newStatus,
      changeStatus,
    }));
  };

  const [state, setState] = useState<AppState>({
    loadingStatus: LoadingStatus.initial,
    changeStatus,
  });

  return (
    <AppContext.Provider value={state}>
      <AppWrapper>
        <Routes>
          <Route path={Pages.main} element={<Main />} />
          <Route path={Pages.aboutUs} element={<AboutUs />} />
          <Route path={Pages.create} element={<CreateCharacter />} />
          <Route path={Pages.pageNotFound} element={<NotFound />} />
        </Routes>
      </AppWrapper>
    </AppContext.Provider>
  );
};

export default App;
