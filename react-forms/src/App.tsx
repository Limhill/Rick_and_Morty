import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Main from 'pages/Main';
import AboutUs from 'pages/AboutUs';
import PageNotFound from 'pages/PageNotFound';
import { Color, Pages } from 'core/enums';
import img from 'assets/images/space.jpg';

const AppWrapper = styled.main`
  background-color: ${Color.black};
  background-image: linear-gradient(rgba(9, 9, 9, 0.5), rgba(9, 9, 9, 0.5)), url(${img});
  min-height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path={Pages.main} element={<Main />} />
        <Route path={Pages.aboutUs} element={<AboutUs />} />
        <Route path={Pages.pageNotFound} element={<PageNotFound />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
