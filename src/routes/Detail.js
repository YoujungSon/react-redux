import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const toDos = useSelector((state) => state);
  const params = useParams();
  const todoText = toDos.find((todo) => todo.id === parseInt(params.id));

  return (
    <div>
      <h1>{todoText?.text}</h1>
      <p>Created at: {todoText?.id}</p>
    </div>
  );
};
export default Detail;
