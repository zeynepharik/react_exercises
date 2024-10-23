
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counterSlice';
import Counter from '../components/Counter';
import '@testing-library/jest-dom';

test('increments and decrements the counter', () => {
  const store = configureStore({ reducer: { counter: counterReducer } });

  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

 
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();

  // Increment butonu
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();

  // Decrement butonu
  fireEvent.click(screen.getByText(/decrement/i));
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
});
