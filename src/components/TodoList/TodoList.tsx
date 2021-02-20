import React from 'react';
import './TodoList.css';

interface TodoListProps {
  todos: { id: string; info: string }[];
  removeTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  const { todos, removeTodo } = props;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.info}</span>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
