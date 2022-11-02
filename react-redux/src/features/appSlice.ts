import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingStatus, SearchBy } from 'core/enums';
import { searchRequest } from 'core/constants';
import { AppReduxState } from 'core/interfaces/states';

const initialState: AppReduxState = {
  loadingStatus: LoadingStatus.initial,
  searchBy: SearchBy.name,
  resultsPerPage: 20,
  currentPage: 1,
  characters: [],
  pages: [],
  searchBarValue: localStorage.getItem(searchRequest) || '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLoadingStatus: (state: AppReduxState, action: PayloadAction<LoadingStatus>) => {
      state.loadingStatus = action.payload;
    },
    changeSearchBy: (state: AppReduxState, action: PayloadAction<SearchBy>) => {
      state.searchBy = action.payload;
    },
    changeResultsPerPage: (state: AppReduxState, action: PayloadAction<number>) => {
      state.resultsPerPage = action.payload;
    },
    changeCurrentPage: (state: AppReduxState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    changeSearchBarValue: (state: AppReduxState, action: PayloadAction<string>) => {
      state.searchBarValue = action.payload;
    },
  },
});

export const {
  changeLoadingStatus,
  changeSearchBy,
  changeResultsPerPage,
  changeCurrentPage,
  changeSearchBarValue,
} = appSlice.actions;

export default appSlice.reducer;
