import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList and initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test New Todo')).toBeInTheDocument();
  });

  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    // Toggle to completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Toggle back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoToDelete = screen.getByText('Learn React');
    // Find the delete button next to 'Learn React'
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);

    expect(todoToDelete).not.toBeInTheDocument();
  });
});