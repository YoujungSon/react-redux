import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo } from './../store';

const Home = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state);
  console.log(todos);
  const dispatch = useDispatch();
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText('');
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((toDo) => (
          <li key={toDo?.id}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
