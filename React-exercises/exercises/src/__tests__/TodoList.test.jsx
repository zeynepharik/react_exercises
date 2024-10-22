import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';  

test('adds a todo to the list', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add a todo/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });
    
    fireEvent.click(screen.getByText(/add todo/i));
    
    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
});
