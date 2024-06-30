import { createAction, props } from '@ngrx/store';

export const searchValues = createAction(
  '[Search] Search Values',
  props<{ value1: string, value2: string[] }>()
);

export const searchValuesSuccess = createAction(
  '[Search] Search Values Success',
  props<{ results: { value: string, percentage: number }[] }>()
);

export const searchValuesFailure = createAction(
  '[Search] Search Values Failure',
  props<{ error: any }>()
);
