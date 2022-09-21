import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import { Pages } from './core/constants';
import AboutUs from 'pages/AboutUs';
import PageNotFound from 'pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.main} element={<Main />} />
        <Route path={Pages.aboutUs} element={<AboutUs />} />
        <Route path={Pages.pageNotFound} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
