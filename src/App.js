import React, { useCallback, useState, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const initData = [
  {
    id: 1,
    text: '리액트 기초 알아보기',
    checked: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링해 보기',
    checked: true,
  },
  {
    id: 3,
    text: '일정 관리 앱 만들어 보기',
    checked: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initData);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
      nextId.current++;
    },
    [todos],
  );

  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
