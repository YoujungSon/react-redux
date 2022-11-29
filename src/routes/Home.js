import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const [text, setText] = useState('');
  const todo = useSelector((state) => state);
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>

      <ul></ul>
    </>
  );
};

export default Home;
