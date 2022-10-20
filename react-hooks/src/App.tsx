import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Main from 'pages/Main';
import AboutUs from 'pages/AboutUs';
import PageNotFound from 'pages/PageNotFound';
import { Color, LoadingStatus, Pages } from 'core/enums';
import img from 'assets/images/space.jpg';
import Create from 'pages/Create';
import { AppState } from 'core/interfaces/states';
import AppContext from 'core/AppContext';

const AppWrapper = styled.main`
  background-color: ${Color.black};
  background-image: linear-gradient(rgba(9, 9, 9, 0.7), rgba(9, 9, 9, 0.7)), url(${img});
  min-height: 100vh;
`;

class App extends React.Component<unknown, AppState> {
  changeStatus: (newStatus: LoadingStatus) => void;
  constructor(props: unknown) {
    super(props);

    this.changeStatus = (newStatus: LoadingStatus) => {
      this.setState(() => ({
        loadingStatus: newStatus,
      }));
    };

    this.state = {
      loadingStatus: LoadingStatus.initial,
      changeStatus: this.changeStatus,
    };
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <AppWrapper>
          <Routes>
            <Route path={Pages.main} element={<Main />} />
            <Route path={Pages.aboutUs} element={<AboutUs />} />
            <Route path={Pages.create} element={<Create />} />
            <Route path={Pages.pageNotFound} element={<PageNotFound />} />
          </Routes>
        </AppWrapper>
      </AppContext.Provider>
    );
  }
}

export default App;
