import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from '../components/UserForm';

test('UserForm bileşeni kullanıcıdan veri almalı ve onSubmit fonksiyonunu çağırmalı', () => {
  const handleSubmit = vi.fn();
  render(<UserForm onSubmit={handleSubmit} />);

  const nameInput = screen.getByPlaceholderText(/Name/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const submitButton = screen.getByRole('button', { name: /Submit/i });

  // Kullanıcı adı ve e-posta 
  fireEvent.change(nameInput, { target: { value: 'Zeynep Harık' } });
  fireEvent.change(emailInput, { target: { value: 'zeynepharik@gmail.com' } });

  // Form
  fireEvent.click(submitButton);

  
  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'Zeynep Harık',
    email: 'zeynepharik@gmail.com',
  });
  expect(nameInput.value).toBe('');
  expect(emailInput.value).toBe('');
});