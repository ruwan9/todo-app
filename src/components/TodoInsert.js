import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert({ onInsert }) {
  const [text, setText] = useState('');

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(text);
      setText('');
      // submit 이벤트는 브라우저의 새로고침을 발생
      // 이를 방지하기 위해 preventDefault 함수 호출
      e.preventDefault();
    },
    [text, onInsert],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={onChange}
      />
      <button>
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
