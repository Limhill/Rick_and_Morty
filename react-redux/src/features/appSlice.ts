import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingStatus, SearchBy } from 'core/enums';
import { searchRequest } from 'core/constants';
import { AppReduxState } from 'core/interfaces/states';
import { getFilteredCharacters } from 'services/api';
import { splitArrayOnChunks } from 'services/helpers';

interface ThunkProps {
  searchBarValue: string;
  searchBy: SearchBy;
}

const initialState: AppReduxState = {
  loadingStatus: LoadingStatus.initial,
  searchBy: SearchBy.name,
  resultsPerPage: 20,
  currentPage: 1,
  characters: [],
  pages: [],
  searchBarValue: localStorage.getItem(searchRequest) || '',
};

export const getCharacters = createAsyncThunk(
  'app/getCharacters',
  async ({ searchBarValue, searchBy }: ThunkProps) => {
    return await getFilteredCharacters(searchBarValue, searchBy);
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeSearchBy: (state: AppReduxState, action: PayloadAction<SearchBy>) => {
      state.searchBy = action.payload;
    },
    changeResultsPerPage: (state: AppReduxState, action: PayloadAction<number>) => {
      state.resultsPerPage = action.payload;
      state.pages = splitArrayOnChunks(state.characters, action.payload);
      state.currentPage = 1;
    },
    changeCurrentPage: (state: AppReduxState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    changeSearchBarValue: (state: AppReduxState, action: PayloadAction<string>) => {
      state.searchBarValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loadingStatus = LoadingStatus.loading;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        if (typeof action.payload === 'string') {
          state.characters = [];
          state.pages = [];
          state.loadingStatus = LoadingStatus.error;
        } else {
          state.characters = action.payload;
          state.pages = splitArrayOnChunks(action.payload, state.resultsPerPage);
          state.loadingStatus = LoadingStatus.success;
        }
        state.currentPage = 1;
      })
      .addCase(getCharacters.rejected, (state) => {
        state.loadingStatus = LoadingStatus.error;
        state.characters = [];
        state.pages = [];
        state.currentPage = 1;
      });
  },
});

export const { changeSearchBy, changeResultsPerPage, changeCurrentPage, changeSearchBarValue } =
  appSlice.actions;

export default appSlice.reducer;
