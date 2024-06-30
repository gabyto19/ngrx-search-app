import { createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/search.actions';

export interface SearchState {
  results: { value: string, percentage: number }[];
  error: any;
}

export const initialState: SearchState = {
  results: [],
  error: null,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.searchValuesSuccess, (state, { results }) => ({
    ...state,
    results,
    error: null,
  })),
  on(SearchActions.searchValuesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
