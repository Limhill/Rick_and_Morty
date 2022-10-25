import React from 'react';
import { LoadingStatus, SortBy } from 'core/enums';

const AppContext = React.createContext({
  loadingStatus: LoadingStatus.initial,
  sortBy: SortBy.name,
  changeStatus: (newStatus: LoadingStatus) => {
    console.log(newStatus);
  },
});

export default AppContext;
