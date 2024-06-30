import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SearchActions from '../actions/search.actions';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions) {}

  searchValues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchValues),
      mergeMap(action => {
        const results = action.value2.map(value => ({
          value,
          percentage: this.calculatePercentage(action.value1, value)
        }));
        return of(SearchActions.searchValuesSuccess({ results })).pipe(
          catchError(error => of(SearchActions.searchValuesFailure({ error })))
        );
      })
    )
  );

  private calculatePercentage(value1: string, value2: string): number {
    const matchCount = value1
      .split('')
      .reduce((count, char) => count + (value2.includes(char) ? 1 : 0), 0);
    return (matchCount / value2.length) * 100;
  }
}
