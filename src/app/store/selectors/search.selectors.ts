import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from '../reducers/search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectSearchResults = createSelector(
  selectSearchState,
  (state: SearchState) => state.results
);

export const selectSearchError = createSelector(
  selectSearchState,
  (state: SearchState) => state.error
);
