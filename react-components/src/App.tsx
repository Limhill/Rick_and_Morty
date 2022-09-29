import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import AboutUs from 'pages/AboutUs';
import PageNotFound from 'pages/PageNotFound';
import { Pages } from './core/enums';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path={Pages.main} element={<Main />} />
        <Route path={Pages.aboutUs} element={<AboutUs />} />
        <Route path={Pages.pageNotFound} element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
