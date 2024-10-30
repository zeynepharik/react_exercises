import { createReducer, on } from '@ngrx/store';
import { loadReadingProgressSuccess, loadReadingProgressFailure } from './reading-progress.actions';

export interface ReadingProgressState {
  progress: any[];
  error: any;
}

export const initialState: ReadingProgressState = {
  progress: [],
  error: null,
};

export const readingProgressReducer = createReducer(
  initialState,
  on(loadReadingProgressSuccess, (state, { progress }) => ({ ...state, progress })),
  on(loadReadingProgressFailure, (state, { error }) => ({ ...state, error }))
);
