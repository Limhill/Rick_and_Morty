import React from 'react';
import { LoadingStatus, SearchBy } from 'core/enums';
import { AppState } from 'core/interfaces/states';

const AppContext = React.createContext<AppState>({
  loadingStatus: LoadingStatus.initial,
  searchBy: SearchBy.name,
  resultsPerPage: 20,
  currentPage: 1,
  characters: [],
  pages: [],
  changeContext: (data: Partial<AppState>) => {
    /* do nothing */
  },
});

export default AppContext;
