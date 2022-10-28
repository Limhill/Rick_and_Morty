import React from 'react';
import { LoadingStatus, SearchBy } from 'core/enums';
import { AppState } from 'core/interfaces/states';

const AppContext = React.createContext<AppState>({
  loadingStatus: LoadingStatus.initial,
  searchBy: SearchBy.name,
  resultsPerPage: 20,
  changeContext: (data: Partial<AppState>) => {
    console.log(data);
  },
});

export default AppContext;
