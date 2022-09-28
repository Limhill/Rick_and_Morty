import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import { Pages } from './core/enums';
import AboutUs from 'pages/AboutUs';
import PageNotFound from 'pages/PageNotFound';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path={Pages.main} element={<Main />} />
          <Route path={Pages.aboutUs} element={<AboutUs />} />
          <Route path={Pages.pageNotFound} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
