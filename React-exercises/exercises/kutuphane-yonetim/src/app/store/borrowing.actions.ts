import { createAction, props } from '@ngrx/store';

export const loadBorrowings = createAction('[Borrowing] Load Borrowings');
export const loadBorrowingsSuccess = createAction(
  '[Borrowing] Load Borrowings Success',
  props<{ borrowings: any[] }>()
);
export const loadBorrowingsFailure = createAction(
  '[Borrowing] Load Borrowings Failure',
  props<{ error: any }>()
);
