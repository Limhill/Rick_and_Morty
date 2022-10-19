import React from 'react';
import { LoadingStatus } from '../enums';

const AppContext = React.createContext({
  loadingStatus: LoadingStatus.initial,
  changeStatus: (newStatus: LoadingStatus) => {
    console.log(newStatus);
  },
});

export default AppContext;
