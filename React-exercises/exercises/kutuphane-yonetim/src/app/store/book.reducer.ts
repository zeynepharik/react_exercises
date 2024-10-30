import { createReducer, on } from '@ngrx/store';
import { loadBooksSuccess, loadBooksFailure } from './book.actions';

export interface BookState {
  books: any[];
  error: any;
}

export const initialState: BookState = {
  books: [],
  error: null,
};

export const bookReducer = createReducer(
  initialState,
  on(loadBooksSuccess, (state, { books }) => ({ ...state, books })),
  on(loadBooksFailure, (state, { error }) => ({ ...state, error }))
);
