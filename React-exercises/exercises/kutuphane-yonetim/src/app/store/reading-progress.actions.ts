import { createAction, props } from '@ngrx/store';

export const loadReadingProgress = createAction('[Reading Progress] Load Reading Progress');
export const loadReadingProgressSuccess = createAction(
  '[Reading Progress] Load Reading Progress Success',
  props<{ progress: any[] }>()
);
export const loadReadingProgressFailure = createAction(
  '[Reading Progress] Load Reading Progress Failure',
  props<{ error: any }>()
);
