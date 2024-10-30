import { createReducer, on } from '@ngrx/store';
import { loadBorrowingsSuccess, loadBorrowingsFailure } from './borrowing.actions';

export interface BorrowingState {
  borrowings: any[];
  error: any;
}

export const initialState: BorrowingState = {
  borrowings: [],
  error: null,
};

export const borrowingReducer = createReducer(
  initialState,
  on(loadBorrowingsSuccess, (state, { borrowings }) => ({ ...state, borrowings })),
  on(loadBorrowingsFailure, (state, { error }) => ({ ...state, error }))
);
