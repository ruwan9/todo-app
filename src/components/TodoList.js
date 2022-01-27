import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
