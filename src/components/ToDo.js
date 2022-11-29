import React from 'react';
import { deleteToDo } from '../store';
import { useDispatch } from 'react-redux';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      {text} <button onClick={onClick}>DEL</button>
    </li>
  );
};

export default ToDo;
